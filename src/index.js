import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./contexts";
import { CategoryProvider } from "./contexts/data/categoryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataProvider>
    <CategoryProvider>
    <App />
    </CategoryProvider>
    </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
