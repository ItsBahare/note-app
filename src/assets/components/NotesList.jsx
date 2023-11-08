import "./NoteList.css";
import { FaTrashAlt, FaRegHeart } from "react-icons/fa";

const note = [
  {
    id: 1,
    title: "dummy title,,",
    description: "dummy decs...",
    createAt: "2023-11-07T17:24:26.538Z",
  },
  {
    id: 2,
    title: "dummy title two",
    description: "dummy decs two",
    createAt: "2022-09-07T17:24:26.538Z",
  },
  {
    id: 3,
    title: "dummy title three",
    description: "dummy decs three",
    createAt: "2021-05-07T17:24:26.538Z",
  },
];

function NoteList() {
  return (
    <>
      {note.map((t) => {
        return (
          <>
            <div className="notes" key={t.id}>
              <div className="note-details">
                <p className="note-data">
                  {new Date(t.createAt).toLocaleDateString("US", {
                    month: "long",
                    day: "2-digit",
                  })}
                </p>

                <h1 className="note-title">{t.title}</h1>
                <p className="note-desc">{t.description}</p>
              </div>
              <div className="icons">
                <span className="trash">
                  <FaTrashAlt />
                </span>
                <span className="heart">
                  <FaRegHeart />
                </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default NoteList;
