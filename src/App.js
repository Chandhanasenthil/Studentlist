import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import StudentListPage from "./StudentListPage";
import FavouriteStudentsPage from "./FavouriteStudentsPage";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentListPage />} />
          <Route path="/favourites" element={<FavouriteStudentsPage />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;