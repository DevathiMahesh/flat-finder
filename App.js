import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import UploadForm from './components/upload-form/UploadForm';
import FlatFinderMain from './sections/FlatFinderMain';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route eact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<FlatFinderMain />} />
        <Route path="/create-post" element={<UploadForm />} />
      </Routes>
    </BrowserRouter>
  );
}
