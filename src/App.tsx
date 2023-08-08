import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="landing">
        <div></div>
        <header className="nav">
          <Link activeClass="active" smooth spy to="about" style={{cursor: "pointer"}}>
            ABOUT
          </Link>
          <Link activeClass="active" smooth spy to="projects" style={{cursor: "pointer"}}>
            PROJECTS
          </Link>
          <Link activeClass="active" smooth spy to="blog" style={{cursor: "pointer"}}>
            BLOG
          </Link>
          <Link activeClass="active" smooth spy to="contact" style={{cursor: "pointer"}}>
            CONTACT ME
          </Link>
        </header>
      </section>
      <section id="about">ABOUT</section>
      <section id="projects">PROJECTS</section>
      <section id="blog">BLOG</section>
      <section id="contact">CONTACT ME</section>
    </div>
  );
}

export default App;
