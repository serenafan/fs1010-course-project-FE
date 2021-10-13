import React from "react";

const Navigation = () => {
  return (
    <header>
      <nav className="sub-nav">
        <ul className="main-menu">
          <li className="menu-item">
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="/cv">Resume</a>
          </li>
          <li className="menu-item">
            <a href="/contact">Contact me</a>
          </li>
          <li className="menu-item">
            <a href="/submissions">Submissions</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
