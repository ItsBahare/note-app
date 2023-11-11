import { useState } from "react";

function AddNewNote({ handleNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const NewNote = {
      id: new Date().getTime(),
      title,
      description,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTitle("");
    setDescription("");
    handleNote(NewNote);
  };

  return (
    <div>
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          placeholder="note title...."
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          placeholder="note description..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
