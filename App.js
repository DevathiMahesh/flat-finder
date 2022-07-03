import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import MyPosts from './components/my-posts/MyPosts';
import UploadForm from './components/upload-form/UploadForm';
import FlatFinderMain from './sections/FlatFinderMain';
import Profile from './sections/Profile/profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route eact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<FlatFinderMain />} />
        <Route path="/create-post" element={<UploadForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-posts" element={<MyPosts />} />
      </Routes>
    </BrowserRouter>
  );
}
