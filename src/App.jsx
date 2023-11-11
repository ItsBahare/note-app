import { useState } from "react";
import "./App.css";
import AddNewNote from "./assets/components/AddNewNote";
import NoteList from "./assets/components/NoteList";
import NoteStatus from "./assets/components/NoteStatus";

function App() {
  const [note, setNote] = useState([]);

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
        <div className="note-header">note header</div>
        <div className="note-app">
          <div className="add-new-note">
            <AddNewNote handleNote={handleNote} />
          </div>
          <div className="note-container">
            <NoteStatus note={note} />
            <NoteList
              note={note}
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
