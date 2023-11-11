function NoteStatus({ note }) {
  const AllNotes = note.length;
  const Uncompleted = note.filter((n) => n.completed).length;
  const Open = AllNotes - Uncompleted;

  if (!AllNotes) return <h2>Set your note :)</h2>;

  return (
    <ul className="note-status">
      <li>
        All Notes<span>{AllNotes}</span>
      </li>
      <li>
        Uncompleted<span>{Uncompleted}</span>
      </li>
      <li>
        Open<span>{Open}</span>
      </li>
    </ul>
  );
}
export default NoteStatus;
