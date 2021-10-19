import React, {useCallback} from 'react';
import "./index.scss";
import {useTranslation} from "react-i18next";

const LangButton: React.FC<{ className?: string }> = ({ className= '' }) => {
    const { i18n } = useTranslation();
    const languages = ["pl", "en"].filter((lang) => lang !== i18n.language);

    const onChangeLang = useCallback((lang) => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [i18n]);


  return (
      <React.Fragment>
          {languages && (
              <div className={`lang-button ${className}`}>
                  {languages.map((lang) => (
                      <button
                          type="button"
                          className="lang-button__button"
                          key={lang}
                          onClick={() => onChangeLang(lang)}
                      >
                          {lang}
                      </button>
                  ))}
              </div>
          )}
      </React.Fragment>
  );
};

export default LangButton;
