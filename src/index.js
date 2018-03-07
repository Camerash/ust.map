import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main></Main>, document.getElementById('main'));

registerServiceWorker();
