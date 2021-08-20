import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';

// CSS Files
// Bootstrap CSS
import './assets/plugins/bootstrap/css/bootstrap.min.css';

import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';

// Custom CSS
import './assets/css/style.css';

// Fancy Box
import '../src/assets/plugins/fancybox/jquery.fancybox.min.css';
import '../src/assets/plugins/fancybox/jquery.fancybox';

import '../src/assets/plugins/select2/css/select2.min.css';
import '../src/assets/plugins/select2/js/select2.min';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
