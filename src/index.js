import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from './Button';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Button />, document.getElementById('rootButton'));
registerServiceWorker();
