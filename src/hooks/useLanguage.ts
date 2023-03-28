import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

type LanguageObject = {
  label: string;
  value: string;
};

type UseLanguageReturnType = {
  languageObject: LanguageObject;
  handleLanguageChange: (language: LanguageObject) => void;
};

const getLangFromLocalStorage = (): LanguageObject => {
  const storedLanguage = localStorage.getItem("defaultLanguage");
  if (storedLanguage) {
    return JSON.parse(storedLanguage);
  } else {
    return { label: "English", value: "en" };
  }
};

export const useLanguage = (): UseLanguageReturnType => {
  const { i18n } = useTranslation();
  const [languageObject, setDefaultLanguage] = useState<LanguageObject>(
    getLangFromLocalStorage()
  );

  useEffect(() => {
    i18n.changeLanguage(getLangFromLocalStorage().value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("defaultLanguage", JSON.stringify(languageObject));
  }, [languageObject]);

  const handleLanguageChange = useCallback(
    (language: LanguageObject) => {
      i18n.changeLanguage(language.value);
      setDefaultLanguage(language);
    },
    [i18n]
  );

  return { languageObject, handleLanguageChange };
};
