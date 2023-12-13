import React from "react";
import "./Home.css";
import "boxicons/css/boxicons.min.css";
import logo from "../../assets/img/logo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subject from "../subject/Subject";
import Contact from "../getintouch/Getintouch";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <video autoPlay loop muted playsInline className="background-video">
        <source
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05"
          type="video/mp4"
        />
      </video>

      <header>
        <a href="#" className="text">
          <img src={logo} className="logo" />
          EC-Resource Hub
        </a>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>
        <Router>
          <Routes>
            <Route path="/" exact component={App} />
            <Route path="/subject" component={Subject} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </Router>

        <nav className="navbar">
          <a href="/" className="nav-item-0" style={{ "--i": 0 }}>
            Home
          </a>
          <a href="/subject" className="nav-item-0" style={{ "--i": 1 }}>
            Study Materials
          </a>
          <a href="/contact" className="nav-item-0" style={{ "--i": 2 }}>
            Contact Us
          </a>
          <a
            href="https://forms.gle/Ht6i3cSoA3A2fhjj9"
            className="nav-item-0"
            style={{ "--i": 3 }}
          >
            Contribute
          </a>
        </nav>
      </header>

      <section className="content">
        <h1> Welcome to EC-Resource Hub</h1>
        <span className="para">Ignite, Innovate, Engineer</span>
        <a href="#" className="btn light"></a>
      </section>
    </div>
  );
}

export default App;
