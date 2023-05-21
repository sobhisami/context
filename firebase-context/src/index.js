import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  style from './resources/css/custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ContextHandle } from './componant/Context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextHandle>
  <App/>
  </ContextHandle>
);

