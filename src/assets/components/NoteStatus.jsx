import Message from "./Message";

function NoteStatus({ note }) {
  const AllNotes = note.length;
  const Uncompleted = note.filter((n) => n.completed).length;
  const Open = AllNotes - Uncompleted;

  if (!AllNotes) return <Message>یادداشت خود را وارد کنید</Message>;

  return (
    <ul className="note-status">
      <li>
        همه یادداشت ها<span>{AllNotes}</span>
      </li>
      <li>
        تکمیل نشده<span>{Uncompleted}</span>
      </li>
      <li>
        باز<span>{Open}</span>
      </li>
    </ul>
  );
}
export default NoteStatus;
