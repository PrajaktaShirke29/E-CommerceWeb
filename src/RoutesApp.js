import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import TutorialsList from "./components/TutorialsList";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";

function RoutesApp() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<TutorialsList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<TutorialsList />} />
        <Route path="/products" element={<AddTutorial />} />
        <Route path="/support" element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default RoutesApp;
