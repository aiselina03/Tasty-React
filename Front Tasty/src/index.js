import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainProvider from "./context/mainProvider.jsx";
import "./assets/sass/reset.scss"
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
          <MainProvider>
         <App /> 
    </MainProvider>
    </HelmetProvider>

  </React.StrictMode>
);
