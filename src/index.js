import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './globalStyles';
import { firebase } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  
    <GlobalStyles />  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);