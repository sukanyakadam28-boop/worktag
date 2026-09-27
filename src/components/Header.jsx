import { FiBell, FiSearch } from "react-icons/fi";

import "../css/Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-search">
        <FiSearch />

        <input
          type="text"
          placeholder="Search tasks..."
        />
      </div>

      <button className="header-notification" aria-label="Notifications">
        <FiBell />
        <span className="notification-dot"></span>
      </button>

    </header>
  );
}

export default Header;