import React from 'react';
import ReactDOM from 'react-dom';
import { EscolaLMSContextProvider } from '@escolalms/sdk/lib/react/context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './i18n';

serviceWorkerRegistration.register();

ReactDOM.render(
  <React.StrictMode>
    <EscolaLMSContextProvider
      apiUrl={
        process.env.NEXT_PUBLIC_API_URL || //"http://localhost:1000"
        'https://escola-lms-api.stage.etd24.pl'
      }
    >
      <App />
    </EscolaLMSContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
