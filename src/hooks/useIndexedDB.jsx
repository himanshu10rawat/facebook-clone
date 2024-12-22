import { useEffect, useState } from "react";

const useIndexedDB = (storeName, initialValue) => {
  console.log("storeName", storeName);

  const [value, setValue] = useState(initialValue);

  const initializeDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("fakebook");

      request.onsuccess = (event) => {
        const database = event.target.result;

        if (!database.objectStoreNames.contains(storeName)) {
          // If the store doesn't exist, close the database and upgrade its version
          database.close();
          const newRequest = indexedDB.open("fakebook", database.version + 1);

          newRequest.onupgradeneeded = (upgradeEvent) => {
            const upgradeDb = upgradeEvent.target.result;

            // Create the missing store
            upgradeDb.createObjectStore(storeName, { keyPath: "userId" });
            console.log(`Object store '${storeName}' created.`);
          };

          newRequest.onsuccess = (newEvent) => {
            resolve(newEvent.target.result);
          };

          newRequest.onerror = (errorEvent) => {
            reject(errorEvent.target.error);
          };
        } else {
          resolve(database);
        }
      };

      request.onupgradeneeded = (event) => {
        const database = event.target.result;

        // Create the object store during the initial setup if it doesn't exist
        if (!database.objectStoreNames.contains(storeName)) {
          database.createObjectStore(storeName, { keyPath: "userId" });
          console.log(
            `Object store '${storeName}' created during initial setup.`
          );
        }
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };

  const setStoredValue = async (newValue) => {
    try {
      const database = await initializeDatabase();

      const transaction = database.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      if (newValue.userId || newValue.length) {
        if (Array.isArray(newValue)) {
          newValue.forEach((item) => store.add(item));
        } else {
          store.add(newValue);
        }
      }

      transaction.oncomplete = () => {
        console.log("Transaction completed!");
      };

      transaction.onerror = (event) => {
        console.error("Transaction error:", event.target.error);
      };
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const database = await initializeDatabase();

        const transaction = database.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);

        if (storeName.length) {
          const getAllRequest = store.getAll();

          getAllRequest.onsuccess = (e) => {
            setValue(e.target.result);
            console.log("Data fetched successfully:", e.target.result);
          };

          getAllRequest.onerror = (e) => {
            console.error("Error fetching data:", e.target.error);
          };

          transaction.oncomplete = () => {
            console.log("Transaction completed successfully!");
          };
        }
      } catch (error) {
        console.error("Error initializing database:", error);
      }
    })();
  }, [storeName]);

  return [value, setStoredValue];
};

export default useIndexedDB;
