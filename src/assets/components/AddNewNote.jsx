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
      <h3>اضافه کردن یادداشت</h3>
      <form className="note-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          placeholder="تیتر یادداشت"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          placeholder="توضیحات"
        />
        <button type="submit" className="btn btn--primary">
          افزودن
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
