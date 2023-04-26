import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
   <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    {/* </LocalizationProvider> */}
  </BrowserRouter>

);

