import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { defineCustomElements } from '@workspace/react';
defineCustomElements().then(() => console.log("React Stencil Loaded Successfully"));
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <App />
  </React.StrictMode>);
