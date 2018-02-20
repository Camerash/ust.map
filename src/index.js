import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Nav from './components/Nav';
import Main from './components/Main';
import Layers from './components/Layers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main><Layers/></Main>, document.getElementById('main'));

ReactDOM.render(<Nav />, document.getElementById('nav'));
registerServiceWorker();
