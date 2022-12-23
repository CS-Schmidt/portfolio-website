import React, { useEffect } from 'react';
import TypeIt from 'typeit';
import './styles';

export default function Intro() {
  useEffect(() => {
    const typingEffect = new TypeIt('#intro-message', {
      strings: ["Hi there. I'm Ethan.", "I'm a Web Developer."]
    });
    typingEffect.go();
  }, []);
  return (
    <section className="portfolio-section">
      <h2 id="intro-message" />
    </section>
  );
}
