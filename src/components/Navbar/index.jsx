import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import debounce from '../../utils/debounce';
import navLogo from '../../assets/nav-logo.svg';
import './styles.css';

export default function Navbar() {
  const menuToggle = useRef();
  const menuLinks = useRef();
  const [mobileView, setMobileView] = useState(window.innerWidth <= 600);
  const [menuToggled, setMenuToggled] = useState(false);
  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        if (window.innerWidth <= 600) setMobileView(true);
        else setMobileView(false);
      }, 20)
    );
  }, []);
  useEffect(() => {
    if (menuToggled) setMenuToggled(false);
  }, [mobileView]);

  return (
    <nav id="main-nav">
      {/* TODO: add locomotive scroll integration */}
      <img className="main-nav__logo" src={navLogo} />
      {/* Mobile nav menu toggle. */}
      {/* TODO: find a way to prevent programmatic clicks on non-mobile view */}
      <button
        ref={menuToggle}
        className={`main-nav__menu-toggle ${mobileView ? 'show' : ''}`}
        onClick={function toggleMenu() {
          if (mobileView) {
            setMenuToggled(!menuToggled);
          }
        }}
        type="button"
      >
        {!menuToggled ? (
          <FontAwesomeIcon
            className="main-nav__menu-toggle-icon"
            icon={faBars}
          />
        ) : (
          <FontAwesomeIcon
            className="main-nav__menu-toggle-icon"
            icon={faXmark}
          />
        )}
      </button>
      {/* Menu */}
      <div
        ref={menuLinks}
        className={`main-nav__links-wrapper ${menuToggled ? 'show' : ''}`}
      >
        {/* Internal links. */}
        {/* TODO: add locomotive scroll integration */}
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
              href="https:github.com/CS-Schmidt"
              rel="author noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="main-nav__icon-link"
                icon={faGithubSquare}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cs-schmidt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="main-nav__icon-link"
                icon={faLinkedin}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
