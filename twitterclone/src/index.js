import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
   <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
  </BrowserRouter>

);

