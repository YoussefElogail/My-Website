import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import {  HelmetProvider } from 'react-helmet-async';
import './i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
serviceWorkerRegistration.register();

