import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bookMeal from './store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App store = {bookMeal}/>, document.getElementById('root'));
registerServiceWorker();
