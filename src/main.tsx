import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { defineCustomElements } from 'xhio-codes-shared-components-test/loader';

defineCustomElements().then(() => console.log("React Stencil Loaded Successfully"));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
