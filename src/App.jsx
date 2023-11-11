import { useState } from "react";
import "./App.css";
import AddNewNote from "./assets/components/AddNewNote";
import NoteList from "./assets/components/NoteList";

function App() {
  const [note, setNote] = useState([]);

  const handleNote = (newNote) => {
    setNote((prevNote) => [...prevNote, newNote]);
  };

  const handleDelete = (id) => {
    const deleteNote = note.filter((n) => n.id !== id);
    setNote(deleteNote);
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
            <NoteList note={note} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
