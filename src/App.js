import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import RoutesApp from "./RoutesApp";

function App() {
  return (
    <Router>
      <Layout />
      <RoutesApp />
    </Router>
  );
}

export default App;
