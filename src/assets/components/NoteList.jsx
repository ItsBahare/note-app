function NoteList({ note, handleDelete }) {
  return (
    <div className="note-list">
      {note.map((note) => (
        <NoteItem key={note.id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, handleDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__header">
        <p className="title">{note.title}</p>
        <p className="desc">{note.description}</p>
        <div className="actions">
          <button onClick={() => handleDelete(note.id)}>❌</button>
          <input type="checkbox" name="" id="" />
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
