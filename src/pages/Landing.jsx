import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiCalendar,
  FiTarget,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMenu,
} from "react-icons/fi";

import "../css/Landing.css";
import logo from "../assets/WorkTag.png";

function Landing() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}

      <nav className="landing-navbar">

        <Link to="/" className="landing-logo">
          <img src={logo} alt="WorkTag Logo" />
        </Link>

        <div className="landing-nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <div className="landing-nav-actions">
          <Link to="/login" className="landing-login">
            Login
          </Link>

          <Link to="/register" className="landing-signup">
            Get Started
            <FiArrowRight />
          </Link>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="landing-hero">

        <div className="hero-glow"></div>

        <div className="hero-left">

          <div className="hero-badge">
            <FiCheckCircle />
            Your personal productivity space
          </div>

          <h1>
            Plan your day.
            <br />
            <span>Achieve more.</span>
          </h1>

          <p className="hero-subtitle">
            Organize your tasks, manage your time, and turn
            your everyday goals into meaningful progress with WorkTag.
          </p>

          <div className="hero-buttons">

            <Link to="/register" className="hero-primary-btn">
              Get Started Free
              <FiArrowRight />
            </Link>

            <Link to="/login" className="hero-secondary-btn">
              Login
            </Link>

          </div>

          <div className="hero-trust">
            <span>
              <FiCheck />
              Simple to use
            </span>

            <span>
              <FiCheck />
              Stay organized
            </span>
          </div>

        </div>


        {/* ================= DASHBOARD PREVIEW ================= */}

        <div className="hero-right">

          <div className="preview-decoration preview-decoration-one"></div>
          <div className="preview-decoration preview-decoration-two"></div>

          <div className="preview-card">

            <div className="preview-top">

              <div>
                <span className="preview-greeting">
                  Welcome back 👋
                </span>

                <h3>
                  Your Dashboard
                </h3>
              </div>

              <div className="preview-avatar">
                S
              </div>

            </div>


            <div className="preview-stats">

              <div className="preview-stat preview-stat-purple">
                <span>Total Tasks</span>
                <strong>12</strong>
              </div>

              <div className="preview-stat preview-stat-blue">
                <span>Completed</span>
                <strong>7</strong>
              </div>

            </div>


            <div className="preview-task-header">
              <h4>Today's Tasks</h4>
              <span>View all</span>
            </div>


            <div className="preview-task">

              <div className="preview-check">
                <FiCheck />
              </div>

              <div className="preview-task-info">
                <strong>Complete Assignment</strong>
                <span>10:00 AM</span>
              </div>

              <span className="preview-tag tag-green">
                Done
              </span>

            </div>


            <div className="preview-task">

              <div className="preview-empty-check"></div>

              <div className="preview-task-info">
                <strong>WorkTag Frontend</strong>
                <span>02:00 PM</span>
              </div>

              <span className="preview-tag tag-purple">
                High
              </span>

            </div>


            <div className="preview-task">

              <div className="preview-empty-check"></div>

              <div className="preview-task-info">
                <strong>Read Study Notes</strong>
                <span>05:00 PM</span>
              </div>

              <span className="preview-tag tag-blue">
                Low
              </span>

            </div>


            <div className="preview-progress">

              <div className="preview-progress-heading">
                <span>Daily Progress</span>
                <strong>65%</strong>
              </div>

              <div className="preview-progress-track">
                <div className="preview-progress-fill"></div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="landing-features" id="features">

        <div className="section-heading">

          <span className="section-label">
            WHAT YOU CAN DO
          </span>

          <h2>
            Everything you need to
            <span> stay on track.</span>
          </h2>

          <p>
            A simple workspace to organize your everyday life.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card feature-card-purple">

            <div className="feature-icon">
              <FiCheckCircle />
            </div>

            <h3>
              Manage Tasks
            </h3>

            <p>
              Create tasks, set priorities, and keep track
              of everything you need to do.
            </p>

            <span className="feature-number">
              01
            </span>

          </div>


          <div className="feature-card feature-card-blue">

            <div className="feature-icon">
              <FiCalendar />
            </div>

            <h3>
              Plan Your Day
            </h3>

            <p>
              Organize your schedule and keep your daily
              activities in one place.
            </p>

            <span className="feature-number">
              02
            </span>

          </div>


          <div className="feature-card feature-card-pink">

            <div className="feature-icon">
              <FiTarget />
            </div>

            <h3>
              Track Progress
            </h3>

            <p>
              See your completed tasks and stay focused
              on your goals.
            </p>

            <span className="feature-number">
              03
            </span>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="landing-about" id="about">

        <div className="about-content">

          <span className="section-label">
            YOUR DAY, YOUR WAY
          </span>

          <h2>
            Make every day
            <br />
            <span>count with WorkTag.</span>
          </h2>

          <p>
            From small daily tasks to bigger goals,
            WorkTag helps you bring your plans together
            and make your day more organized.
          </p>

          <Link to="/register" className="about-button">
            Start Your Journey
            <FiArrowRight />
          </Link>

        </div>

        <div className="about-art">

          <div className="about-art-circle">
            <FiTarget />
          </div>

          <div className="about-art-small about-art-small-one">
            <FiCheckCircle />
          </div>

          <div className="about-art-small about-art-small-two">
            <FiClock />
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="landing-cta">

        <div className="cta-content">

          <h2>
            Ready to get things done?
          </h2>

          <p>
            Start organizing your day with WorkTag.
          </p>

          <Link to="/register" className="cta-button">
            Create Your Account
            <FiArrowRight />
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="landing-footer">

        <Link to="/" className="footer-logo">
          <img src={logo} alt="WorkTag" />
        </Link>

        <p>
          Make your day more meaningful.
        </p>

        <div className="footer-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <span className="footer-copy">
          © 2026 WorkTag. All rights reserved.
        </span>

      </footer>

    </div>
  );
}

export default Landing;