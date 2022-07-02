import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import FlatFinderMain from "./sections/FlatFinderMain";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route eact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<FlatFinderMain />} />
      </Routes>
    </BrowserRouter>
  );
}
