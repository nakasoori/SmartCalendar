import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HomePage />
, document.getElementById('root'));
registerServiceWorker();
