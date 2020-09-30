import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
