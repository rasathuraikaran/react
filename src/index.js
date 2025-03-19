import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Car from "./components/Car";
import Garage from "./components/Garage";
import Header from "./components/Header";
import FavouriteColor from "./components/FovouriteColor";
import Bike from "./components/Bike";
import Schooter from "./components/Schooter";
import List from "./components/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
  <Bike />
  <List />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
