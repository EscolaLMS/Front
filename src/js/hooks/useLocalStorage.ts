import { Dispatch, useEffect, useState } from "react";

export default function useLocalStorage(
  key: string,
  initialValue = ""
): [string | undefined, Dispatch<string>] {
  const [value, setValue] = useState((): string | undefined => {
    if (typeof localStorage === "undefined") return initialValue;
    localStorage.getItem(key) || initialValue;
  });

  const setItem = (newValue: string): void => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  useEffect((): void => {
    const newValue = localStorage.getItem(key);
    if (value !== newValue) {
      setValue(newValue || initialValue);
    }
  }, [key, initialValue, value]);

  return [value, setItem];
}
