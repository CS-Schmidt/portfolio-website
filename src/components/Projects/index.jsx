import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import personalPhoto from '../../assets/portfolio-website-personal-picture.png';
import './styles';

export default function Projects() {
  const count = new Array();
  for (let i = 0; i < 20; i++) count.push(undefined);
  return (
    <section id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <ul className="projects__list">
        <li>
          <article>
            <div>
              <header>
                <h3>Coin Market Tracker</h3>
                <p>Interesting subtitle</p>
              </header>
              <p>
                Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat
                orci? Placerat vestibulum, lectus mauris ultrices eros, in
                cursus turpis massa tincidunt dui ut ornare lectus sit amet est
                placerat in!
              </p>
              <h4>Technologies Used</h4>
              <ul>
                {count.map(() => {
                  return (
                    <li>
                      <FontAwesomeIcon icon={faReact} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <img alt="" src={personalPhoto} />
          </article>
        </li>
        <li>
          <article>
            <div>
              <header>
                <h3>Coin Market Tracker</h3>
                <p>Interesting subtitle</p>
              </header>
              <p>
                Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat
                orci? Placerat vestibulum, lectus mauris ultrices eros, in
                cursus turpis massa tincidunt dui ut ornare lectus sit amet est
                placerat in!
              </p>
              <h4>Technologies Used</h4>
              <ul>
                {count.map(() => {
                  return (
                    <li>
                      <FontAwesomeIcon icon={faReact} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <img alt="" src={personalPhoto} />
          </article>
        </li>
        <li>
          <article>
            <div>
              <header>
                <h3>Coin Market Tracker</h3>
                <p>Interesting subtitle</p>
              </header>
              <p>
                Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat
                orci? Placerat vestibulum, lectus mauris ultrices eros, in
                cursus turpis massa tincidunt dui ut ornare lectus sit amet est
                placerat in!
              </p>
              <h4>Technologies Used</h4>
              <ul>
                {count.map(() => {
                  return (
                    <li>
                      <FontAwesomeIcon icon={faReact} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <img alt="" src={personalPhoto} />
          </article>
        </li>
        <li>
          <article>
            <div>
              <header>
                <h3>Coin Market Tracker</h3>
                <p>Interesting subtitle</p>
              </header>
              <p>
                Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat
                orci? Placerat vestibulum, lectus mauris ultrices eros, in
                cursus turpis massa tincidunt dui ut ornare lectus sit amet est
                placerat in!
              </p>
              <h4>Technologies Used</h4>
              <ul>
                {count.map(() => {
                  return (
                    <li>
                      <FontAwesomeIcon icon={faReact} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <img alt="" src={personalPhoto} />
          </article>
        </li>
      </ul>
    </section>
  );
}
