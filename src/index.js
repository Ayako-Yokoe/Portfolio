import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeColorProvider } from './ThemeColorContext';
// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeColorProvider>
      <App />
    </ThemeColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

