import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

export default function Navbar() {
  return (
    <nav id="main-navbar">
      <div className="main-navbar__layout">
        <h1>
          {/* TODO: make logo link to intro section */}
          <a href="#introduction" className="main-navbar__logo">
            <FontAwesomeIcon icon={faCode} color="#ff8b00" />
            Ethan Schmidt
          </a>
        </h1>
        <ul className="main-navbar__links">
          <li className="main-navbar__link">
            <a href="#qualifications">Qualifications</a>
          </li>
          <li className="main-navbar__link">
            <a href="#projects">Projects</a>
          </li>
          <li className="main-navbar__link">
            <a href="#contact">Contact</a>
          </li>
          <li className="main-navbar__link">
            <FontAwesomeIcon
              className="github-square"
              icon={faGithubSquare}
              color="#ff8b00"
              onClick={function openGithub() {
                window.open('https:github.com/CS-Schmidt');
              }}
            />
          </li>
          <li className="main-navbar__link">
            <FontAwesomeIcon
              className="github-square"
              icon={faLinkedin}
              color="#ff8b00"
              onClick={function openGithub() {
                window.open('https://www.linkedin.com/in/cs-schmidt');
              }}
            />
          </li>
          <li className="main-navbar__link">
            {/* TODO: add resume download function here. */}
            <button type="button" className="resume-button">
              <FontAwesomeIcon icon={faDownload} />
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
