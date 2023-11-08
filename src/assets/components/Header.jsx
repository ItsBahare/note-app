import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">All Notes</h1>
      <p className="header-text">Your daily notes that reminds you</p>
      <div className="header-input">
        <select>
          <option selected value="new">
            New
          </option>
          <option value="old"> Old </option>
        </select>
      </div>
      <div className="header-notes">
        <p className="header-notes_details active">All notes</p>
        <p className="header-notes_details">Favorites</p>
      </div>
    </div>
  );
}

export default Header;
