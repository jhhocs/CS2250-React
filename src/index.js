import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter} from "react-router-dom";
import "./styles.css";


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import API from "./pages/API";

export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path = "/" element = {<Layout />}>
          <Route index element ={<Home />}/>
          <Route path = "api" element = {<API/>}/>
          <Route path = "tictactoe" element = {<TicTacToe/>}/>
        </Route>
      </Routes>
      </HashRouter> 
  )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);