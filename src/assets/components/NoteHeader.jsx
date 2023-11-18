function NoteHeader({ note, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>یادداشت های من ({note.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">آخرین یادداشت ها</option>
        <option value="earliest">اولین یادداشت ها</option>
        <option value="completed">یادداشت های تکمیل شده</option>
      </select>
    </div>
  );
}

export default NoteHeader;
