import { useState } from "react";
import "./App.css";
import AddNewNote from "./assets/components/AddNewNote";
import NoteList from "./assets/components/NoteList";
import NoteStatus from "./assets/components/NoteStatus";
import NoteHeader from "./assets/components/NoteHeader";

function App() {
  const [note, setNote] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleNote = (newNote) => {
    setNote((prevNote) => [...prevNote, newNote]);
  };

  const handleDelete = (id) => {
    const deleteNote = note.filter((n) => n.id !== id);
    setNote(deleteNote);
  };

  const handleCompleted = (e) => {
    const noteId = Number(e.target.value);
    const newNotes = note.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note,
    );
    setNote(newNotes);
  };

  return (
    <>
      <div className="container">
        <NoteHeader
          note={note}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <div className="note-app">
          <div className="add-new-note">
            <AddNewNote handleNote={handleNote} />
          </div>
          <div className="note-container">
            <NoteStatus note={note} />
            <NoteList
              note={note}
              sortBy={sortBy}
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
