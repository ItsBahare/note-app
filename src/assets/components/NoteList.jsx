function NoteList({ note, handleDelete, handleCompleted, sortBy }) {
  let sortedNotes = note;

  if (sortBy === "earliest")
    sortedNotes = [...note].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );

  if (sortBy === "latest")
    sortedNotes = [...note].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

  if (sortBy === "completed")
    sortedNotes = [...note].sort(
      (a, b) => Number(a.completed) - Number(b.completed),
    );
  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, handleDelete, handleCompleted }) {
  return (
    <div className={` note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
        <div className="actions">
          <button onClick={() => handleDelete(note.id)}>❌</button>
          <input
            onChange={handleCompleted}
            type="checkbox"
            id={note.id}
            value={note.id}
          />
        </div>
        <p className="note-item__footer">
          {new Date(note.createdAt).toLocaleDateString("fa-IR", {
            dateStyle: "full",
          })}
        </p>
      </div>
    </div>
  );
}
