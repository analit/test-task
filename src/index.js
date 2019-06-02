import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap-css-only';
// import App from './App';
import App from './my-src/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
