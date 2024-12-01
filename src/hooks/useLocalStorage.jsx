import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const parsedValue = JSON.parse(localStorage.getItem(key)) ?? initialValue;

  const [value, setValue] = useState(parsedValue);

  const setStoredValue = (newvalue) => {
    setValue(newvalue);
    localStorage.setItem(key, JSON.stringify(newvalue));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
