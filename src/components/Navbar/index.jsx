import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDownload,
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import debounce from '../../utils/debounce';
import './styles.css';

export default function Navbar() {
  const mobileMenuToggle = useRef();
  const mobileMenuLinks = useRef();
  const [mobileView, setMobileView] = useState(
    window.innerWidth <= 600 ? true : false
  );
  const [mobileMenuToggled, setMobileMenuToggled] = useState(false);
  useEffect(function addResizeListener() {
    window.addEventListener(
      'resize',
      debounce(function checkMobileView() {
        if (window.innerWidth <= 600) setMobileView(true);
        else setMobileView(false);
      }, 20)
    );
  }, []);

  return (
    <nav id="main-nav">
      <h1>
        <a className="main-nav__logo">
          <FontAwesomeIcon icon={faCode} color="#f3ff2b" />
          Ethan Schmidt
        </a>
      </h1>
      {/* Mobile nav menu toggle */}
      <button
        ref={mobileMenuToggle}
        onClick={() => setMobileMenuToggled(!mobileMenuToggled)}
        className={mobileView ? 'show' : null}
        type="button"
      >
        {!mobileMenuToggled ? (
          <FontAwesomeIcon className="main-nav__mobile-bars" icon={faBars} />
        ) : (
          <FontAwesomeIcon className="main-nav__mobile-bars" icon={faXmark} />
        )}
      </button>
      <div
        ref={mobileMenuLinks}
        className={`main-nav__links-wrapper ${
          mobileMenuToggled ? 'show' : null
        }`}
      >
        {/* Internal links. */}
        <ul className="main-nav__page-links">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        {/* External links. */}
        <ul className="main-nav__ext-links">
          <li>
            <a
              target="_blank"
              rel="author noopener"
              href="https:github.com/CS-Schmidt"
            >
              <FontAwesomeIcon
                className="github-square"
                icon={faGithubSquare}
                color="#ff8b00"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/cs-schmidt"
            >
              <FontAwesomeIcon
                className="github-square"
                icon={faLinkedin}
                color="#ff8b00"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
