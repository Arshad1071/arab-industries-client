import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./layouts/admin";
import './App.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/test" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
