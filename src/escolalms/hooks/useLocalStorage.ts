import { useState } from "react";

// Hook
export function useLocalStorage<T>(
  storeKey: string,
  key: string,
  initialValue: T
) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(storeKey);
      const store = JSON.parse(item);
      return store[key] ? store[key] : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      const item = window.localStorage.getItem(storeKey);
      const store = item ? JSON.parse(item) : {};
      store[key] = valueToStore;
      setStoredValue(valueToStore);
      window.localStorage.setItem(storeKey, JSON.stringify(store));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}
