import { useCallback, useEffect, useState } from "react";

const DATABASE_NAME = "fakebook";
const DB_OPEN_TIMEOUT_MS = 4000;
const REQUIRED_STORES = ["user", "users"];

let databasePromise;

const createMissingStores = (database) => {
  REQUIRED_STORES.forEach((requiredStoreName) => {
    if (!database.objectStoreNames.contains(requiredStoreName)) {
      database.createObjectStore(requiredStoreName, { keyPath: "userId" });
    }
  });
};

const prepareDatabase = (database) => {
  database.onversionchange = () => {
    database.close();
    databasePromise = null;
  };
  return database;
};

const openDatabase = () => {
  if (!databasePromise) {
    databasePromise = new Promise((resolve, reject) => {
      let isSettled = false;
      const settle = (callback, value) => {
        if (isSettled) return;
        isSettled = true;
        clearTimeout(timeoutId);
        callback(value);
      };
      const timeoutId = setTimeout(() => {
        settle(
          reject,
          new Error("IndexedDB initialization timed out. Using empty state.")
        );
      }, DB_OPEN_TIMEOUT_MS);

      const request = indexedDB.open(DATABASE_NAME);

      request.onupgradeneeded = (event) => {
        createMissingStores(event.target.result);
      };

      request.onsuccess = (event) => {
        const database = event.target.result;
        const hasAllStores = REQUIRED_STORES.every((requiredStoreName) =>
          database.objectStoreNames.contains(requiredStoreName)
        );

        if (hasAllStores) {
          if (isSettled) {
            database.close();
            return;
          }
          settle(resolve, prepareDatabase(database));
          return;
        }

        const nextVersion = database.version + 1;
        database.close();

        const upgradeRequest = indexedDB.open(DATABASE_NAME, nextVersion);

        upgradeRequest.onupgradeneeded = (upgradeEvent) => {
          createMissingStores(upgradeEvent.target.result);
        };

        upgradeRequest.onsuccess = (upgradeEvent) => {
          const upgradedDatabase = upgradeEvent.target.result;
          if (isSettled) {
            upgradedDatabase.close();
            return;
          }
          settle(resolve, prepareDatabase(upgradedDatabase));
        };

        upgradeRequest.onerror = (errorEvent) => {
          settle(reject, errorEvent.target.error);
        };

        upgradeRequest.onblocked = () => {
          settle(
            reject,
            new Error("IndexedDB upgrade was blocked by another tab.")
          );
        };
      };

      request.onerror = (event) => {
        settle(reject, event.target.error);
      };

      request.onblocked = () => {
        settle(reject, new Error("IndexedDB open was blocked by another tab."));
      };
    }).catch((error) => {
      databasePromise = null;
      throw error;
    });
  }

  return databasePromise;
};

const readStore = (database, storeName) =>
  new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };

    transaction.onerror = () => {
      reject(transaction.error);
    };
  });

const writeStore = (database, storeName, newValue) =>
  new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);

    if (Array.isArray(newValue)) {
      store.clear();
      newValue.forEach((item) => {
        if (item?.userId) {
          store.put(item);
        }
      });
    } else if (newValue?.userId) {
      store.clear();
      store.put(newValue);
    } else {
      store.clear();
    }

    transaction.oncomplete = () => {
      resolve();
    };

    transaction.onerror = () => {
      reject(transaction.error);
    };

    transaction.onabort = () => {
      reject(transaction.error);
    };
  });

const useIndexedDB = (storeName, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isReady, setIsReady] = useState(false);

  const getFallbackValue = useCallback(() => {
    if (storeName === "users") return [];
    return initialValue || {};
  }, [initialValue, storeName]);

  const setStoredValue = useCallback(async (newValue) => {
    try {
      const database = await openDatabase();
      await writeStore(database, storeName, newValue);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [storeName]);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const database = await openDatabase();
        const storedRecords = await readStore(database, storeName);

        if (!isMounted) return;

        if (storeName === "user") {
          const [userData] = storedRecords;
          setValue(userData || getFallbackValue());
        } else {
          setValue(storedRecords || getFallbackValue());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (isMounted) {
          setValue(getFallbackValue());
        }
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [getFallbackValue, storeName]);

  return [value, setStoredValue, isReady];
};

export default useIndexedDB;
