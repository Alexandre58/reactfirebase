import React from "react";
import ReactDOM from "react-dom/client";
//import { applyMiddleware, createStore } from "redux";
//import thunk from "redux-thunk";
//import composeWithDevTools from "redux-devtools-extension";

import App from "./App";

//redux
//const store = createStore(
//  rootReducer,
//  composeWithDevTools(applyMiddleware(thunk))
//);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
