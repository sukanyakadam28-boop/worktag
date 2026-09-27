import { useState } from "react";

import "../css/Dashboard.css";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`dashboard ${
        isSidebarOpen ? "dashboard-sidebar-open" : ""
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Dashboard */}
      <div className="dashboard-main">

        {/* Header */}
        <Header />

        <main className="task-dashboard">

          {/* ================= WELCOME SECTION ================= */}
          <section className="welcome-section">

            <div className="welcome-content">

              <p className="welcome-small">
                Welcome back 👋
              </p>

              <h1>
                Good Morning, Sukanya!
              </h1>

              <p className="welcome-text">
                Plan your day. Track your work. Stay productive.
              </p>

            </div>

            <div className="today-date">
              <span>Today</span>

              <strong>
                22 September 2026
              </strong>
            </div>

          </section>


          {/* ================= STATS ================= */}
          <section className="stats-grid">

            {/* Total Tasks */}
            <div className="stat-card stat-purple">

              <div className="stat-icon">
                📋
              </div>

              <div className="stat-content">
                <span>Total Tasks</span>
                <h2>12</h2>
              </div>

            </div>


            {/* Pending */}
            <div className="stat-card stat-blue">

              <div className="stat-icon">
                ◷
              </div>

              <div className="stat-content">
                <span>Pending</span>
                <h2>5</h2>
              </div>

            </div>


            {/* Completed */}
            <div className="stat-card stat-green">

              <div className="stat-icon">
                ✓
              </div>

              <div className="stat-content">
                <span>Completed</span>
                <h2>7</h2>
              </div>

            </div>


            {/* Due Today */}
            <div className="stat-card stat-pink">

              <div className="stat-icon">
                ▣
              </div>

              <div className="stat-content">
                <span>Due Today</span>
                <h2>3</h2>
              </div>

            </div>

          </section>


          {/* ================= MAIN CONTENT ================= */}
          <section className="dashboard-content-grid">

            {/* ================= TODAY'S TASKS ================= */}
            <div className="dashboard-card todays-tasks-card">

              <div className="card-header">

                <div>
                  <h2>Today's Tasks</h2>

                  <p>
                    Stay focused on what matters
                  </p>
                </div>

                <button className="add-task-button">
                  + Add Task
                </button>

              </div>


              <div className="task-list">

                {/* Task 1 */}
                <div className="task-item">

                  <div className="task-check"></div>

                  <div className="task-info">

                    <strong>
                      Complete JavaScript Assignment
                    </strong>

                    <span>
                      Today • 10:00 AM
                    </span>

                  </div>

                  <span className="priority high">
                    High
                  </span>

                </div>


                {/* Task 2 */}
                <div className="task-item">

                  <div className="task-check"></div>

                  <div className="task-info">

                    <strong>
                      WorkTag Frontend
                    </strong>

                    <span>
                      Today • 2:00 PM
                    </span>

                  </div>

                  <span className="priority medium">
                    Medium
                  </span>

                </div>


                {/* Task 3 */}
                <div className="task-item completed-task">

                  <div className="task-check checked">
                    ✓
                  </div>

                  <div className="task-info">

                    <strong>
                      Read Study Notes
                    </strong>

                    <span>
                      Completed
                    </span>

                  </div>

                  <span className="priority low">
                    Low
                  </span>

                </div>

              </div>

            </div>


            {/* ================= PROGRESS ================= */}
            <div className="dashboard-card progress-card">

              <div className="card-header">

                <div>

                  <h2>
                    Today's Progress
                  </h2>

                  <p>
                    Keep going, you're doing great
                  </p>

                </div>

              </div>


              <div className="progress-circle">

                <strong>
                  70%
                </strong>

                <span>
                  Completed
                </span>

              </div>


              <div className="progress-bar">

                <div className="progress-fill"></div>

              </div>


              <p className="progress-message">
                Great work! Keep going 🚀
              </p>

            </div>

          </section>


          {/* ================= UPCOMING TASKS ================= */}
          <section className="dashboard-card upcoming-card">

            <div className="card-header">

              <div>

                <h2>
                  Upcoming Tasks
                </h2>

                <p>
                  What's coming next?
                </p>

              </div>

              <button className="view-all-button">
                View All
              </button>

            </div>


            <div className="upcoming-list">

              {/* Upcoming 1 */}
              <div className="upcoming-item">

                <div className="upcoming-date">

                  <strong>
                    23
                  </strong>

                  <span>
                    SEP
                  </span>

                </div>


                <div className="upcoming-info">

                  <strong>
                    Database Assignment
                  </strong>

                  <span>
                    Tomorrow • 11:00 AM
                  </span>

                </div>

              </div>


              {/* Upcoming 2 */}
              <div className="upcoming-item">

                <div className="upcoming-date">

                  <strong>
                    24
                  </strong>

                  <span>
                    SEP
                  </span>

                </div>


                <div className="upcoming-info">

                  <strong>
                    Project Presentation
                  </strong>

                  <span>
                    Thursday • 1:00 PM
                  </span>

                </div>

              </div>


              {/* Upcoming 3 */}
              <div className="upcoming-item">

                <div className="upcoming-date">

                  <strong>
                    26
                  </strong>

                  <span>
                    SEP
                  </span>

                </div>


                <div className="upcoming-info">

                  <strong>
                    Computer Security Notes
                  </strong>

                  <span>
                    Saturday • 10:00 AM
                  </span>

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;