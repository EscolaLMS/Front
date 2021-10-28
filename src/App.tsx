import React from 'react';
import Routes from './components/Routes';

import './style/css/bootstrap.min.css';
import './style/css/boxicons.min.css';
import './style/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import './style/css/style.scss'; // old
import 'react-image-lightbox/style.css';
import './style/scss/index.scss';

const App = () => {
  return (
    <main>
      <Routes />
    </main>
  );
};

export default App;
