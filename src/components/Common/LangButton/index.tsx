import React, { useCallback } from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';

const LangButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const languages = [
    {
      lang: 'pl',
      icon: '🇵🇱',
    },
    { lang: 'en', icon: '🇺🇸' },
  ];

  const onChangeLang = useCallback(
    (lang) => {
      if (lang) {
        i18n.changeLanguage(lang);
      }
    },
    [i18n],
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
          <span role="img" aria-label="English">
            {languages.filter((lang) => lang.lang === i18n.language)[0].icon} {i18n.language}
          </span>
        </button>
        <ul className="dropdown-menu lang">
          {languages.map((lang) => (
            <li key={lang.lang} className="nav-item">
              <a
                onClick={() => onChangeLang(lang.lang)}
                onKeyDown={(e) => e.preventDefault()}
                href="#/profile"
              >
                <span role="img" aria-label="English">
                  {lang.icon}
                </span>
                <span>{lang.lang}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default LangButton;
