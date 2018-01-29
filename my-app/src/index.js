import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PopWindow from "./PopWindow/PopWindow";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
