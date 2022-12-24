import React, { useEffect } from 'react';
import TypeIt from 'typeit';
import './styles';

export default function Intro() {
  useEffect(() => {
    new TypeIt('.intro__message', {
      strings: [
        "Hi there. I'm <span>Ethan</span>.",
        "I'm a <span>Web Developer</span>."
      ],
      html: true
    }).go();
  }, []);
  return (
    <section id="intro">
      <h1 className="intro__message" />
    </section>
  );
}
