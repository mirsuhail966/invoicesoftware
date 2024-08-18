import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have a CSS file, otherwise you can remove this line
import App from './App';  // Assuming you have an App.js file in the src directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
