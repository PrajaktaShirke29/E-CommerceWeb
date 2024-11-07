import React from "react";
import { Routes, Route } from "react-router-dom";
import TutorialsList from "./components/TutorialsList";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";

function RoutesApp() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<TutorialsList />} />
        <Route path="/tutorials" element={<TutorialsList />} />
        <Route path="/add" element={<AddTutorial />} />
        <Route path="/tutorials/:id" element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default RoutesApp;
