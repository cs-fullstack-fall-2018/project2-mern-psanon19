import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Entries from './Entries';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Entries />, document.getElementById('entries'));
registerServiceWorker();
