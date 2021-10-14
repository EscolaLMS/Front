import React from 'react';
import ReactDOM from 'react-dom';
import { EscolaLMSContextProvider } from '@escolalms/sdk/lib/react/context';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    {process.env.REACT_APP_PUBLIC_API_URL ? (
      <EscolaLMSContextProvider apiUrl={process.env.REACT_APP_PUBLIC_API_URL}>
        <App />
      </EscolaLMSContextProvider>
    ) : (
      <pre>error `process.env.REACT_APP_PUBLIC_API_URL` not set</pre>
    )}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
