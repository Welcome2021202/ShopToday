import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import shopContextProvider from '../src/Context/Shopcontext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <shopContextProvider>
      <App />
    </shopContextProvider>
   
  </>
);


