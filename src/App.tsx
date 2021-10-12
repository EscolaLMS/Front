import React from 'react';
import Routes from './components/Routes';

import './style/css/bootstrap.min.css';
import './style/css/animate.min.css';
import './style/css/boxicons.min.css';
import './style/css/meanmenu.min.css';
import './style/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-tabs/style/react-tabs.css';
import 'react-image-lightbox/style.css';
import './style/css/style.css';
import './style/css/responsive.css';
import './style/css/_overwrite.scss';
import './style/scss/index.scss';

const App = () => {
    return (
        <main>
            <Routes />
        </main>
    );
};

export default App;
