import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeColorProvider } from './ThemeColorContext'


ReactDOM.render(
  <React.StrictMode>
    <ThemeColorProvider>
      <App />
    </ThemeColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

