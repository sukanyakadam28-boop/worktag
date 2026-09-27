import {
  FiHome,
  FiCheckSquare,
  FiCalendar,
  FiStar,
  FiClock,
  FiCheckCircle,
  FiSettings,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "../css/Sidebar.css";
import logo from "../assets/WorkTag.png";

function Sidebar({ isOpen, setIsOpen }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "Sukanya Kadam";

  return (
    <>
      <button
        className={`sidebar-toggle ${
          isOpen ? "sidebar-toggle-open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >

        {/* LOGO */}
        <div className="sidebar-logo">
          <img src={logo} alt="WorkTag" />
        </div>

        <nav className="sidebar-menu">

          {/* MAIN */}
          <div className="sidebar-section-title">
            MAIN
          </div>

          <a href="/dashboard" className="sidebar-link active">
            <FiHome />
            <span>Dashboard</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiCheckSquare />
            <span>My Tasks</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiCalendar />
            <span>Calendar</span>
          </a>

          {/* WORKSPACE */}
          <div className="sidebar-section-title">
            WORKSPACE
          </div>

          <a href="#" className="sidebar-link">
            <FiStar />
            <span>Important</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiClock />
            <span>Upcoming</span>
          </a>

          <a href="#" className="sidebar-link">
            <FiCheckCircle />
            <span>Completed</span>
          </a>

        </nav>

        <div className="sidebar-bottom">

          <a href="#" className="sidebar-link settings-link">
            <FiSettings />
            <span>Settings</span>
          </a>

          <div className="sidebar-user">

            <div className="sidebar-user-icon">
              <FiUser />
            </div>

            <div className="sidebar-user-info">
              <strong>{userName}</strong>
            </div>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;