function NoteList({ note, handleDelete, handleCompleted }) {
  return (
    <div className="note-list">
      {note.map((note) => (
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
          {new Date(note.createAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
