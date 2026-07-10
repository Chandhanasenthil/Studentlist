import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "./StudentContext";

function FavouriteStudentsPage() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="page">
      <nav className="navbar">
        <Link to="/" className="nav-link">Student List</Link>
        <Link to="/favourites" className="nav-link active">Favourite Students</Link>
      </nav>
      <h1>Favourite Students</h1>
      {favourites.length === 0 ? (
        <p className="empty-message">No favourite students added yet.</p>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNo}</p>
              <button className="btn btn-remove" onClick={() => removeFavourite(student.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudentsPage;