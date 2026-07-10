import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    setFavourites((prev) => {
      const exists = prev.some((s) => s.id === student.id);
      if (exists) return prev;
      return [...prev, student];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  return (
    <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
      {children}
    </StudentContext.Provider>
  );
}
export default StudentProvider;