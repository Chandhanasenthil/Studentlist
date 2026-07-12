import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "./StudentContext";
import students from "./studentData";

function StudentListPage() {
  const { addFavourite, isFavourite } = useContext(StudentContext);

  return (
    <div className="page">
      <nav className="navbar">
        <Link to="/" className="nav-link active">Student List</Link>
        <Link to="/favourites" className="nav-link">Favourite Students</Link>
      </nav>
      <h1>Student List</h1>
      <div className="student-grid">
        {students.map((student) => {
          const favourited = isFavourite(student.id);
          return (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>
              <button
                className={favourited ? "btn btn-added" : "btn btn-add"}
                onClick={() => addFavourite(student)}
                disabled={favourited}
              >
                {favourited ? "Added ✓" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentListPage;