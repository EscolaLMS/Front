import React, { useCallback, useMemo } from "react";
//TODO: Rewrite to styled components
import "./index.scss";
import { useTranslation } from "react-i18next";

const LangButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { i18n } = useTranslation();

  const onChangeLang = useCallback(
    (lang: string) => {
      if (lang) {
        i18n.changeLanguage(lang);
      }
    },
    [i18n]
  );

  const languages = useMemo(
    () => [
      {
        lang: "pl",
        icon: "🇵🇱",
        label: "Polish",
      },
      { lang: "en", icon: "🇺🇸", label: "English" },
    ],
    []
  );

  const selectedLang = useMemo(
    () => languages.find((lang) => lang.lang === i18n.language),
    [languages, i18n.language]
  );

  return (
    <React.Fragment>
      <div className="user-dropdown">
        <button
          type="button"
          className="lang-button__button"
          key={i18n.language}
          onClick={(e) => e.preventDefault()}
          onKeyDown={(e) => e.preventDefault()}
        >
          <span role="img" aria-label={selectedLang && selectedLang.label}>
            {selectedLang && selectedLang.icon} {i18n.language}
          </span>
        </button>
        <ul className="dropdown-menu lang">
          {languages.map((lang) => (
            <li key={lang.lang} className="nav-item">
              <span
                role="button"
                tabIndex={0}
                onClick={() => onChangeLang(lang.lang)}
                onKeyDown={(e) => e.preventDefault()}
              >
                <span role="img" aria-label={lang.label}>
                  {lang.icon}
                </span>
                <span>{lang.lang}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default LangButton;
