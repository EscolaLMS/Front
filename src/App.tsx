import React from 'react';
import Routes from './components/Routes';

import './style/css/bootstrap.min.css';
import './style/css/boxicons.min.css';
import './style/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css'; // TODO: move to component
import 'react-image-lightbox/style.css'; // TODO: move to component?
import './style/scss/index.scss';

const App = () => {
  return (
    <main>
      <Routes />
    </main>
  );
};

export default App;
