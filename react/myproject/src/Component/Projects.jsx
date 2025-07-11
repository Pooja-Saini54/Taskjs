import React from 'react'
import './Projects.css';
function Projects() {
  return (
   
    <div className="projects">
      <h2>My Projects</h2>
      <p>Explore some of the projects I've worked on to practice and improve my web development skills.</p>

      <div className="project-list">

        <div className="project-card">
          <h3>📝 To-Do List App</h3>
          <p>
            A clean and interactive to-do list built with HTML, CSS, and JavaScript. It lets users add, delete, and mark tasks as completed.
          </p>
          <a href="https://github.com/Pooja-Saini54/Taskjs" target="_blank" rel="noopener noreferrer"style={{ color: '#76ffff', textDecoration: 'none', fontWeight: 'bold' }}>🔗 View Project</a>
        </div>

        <div className="project-card">
          <h3>📄 Resume Builder</h3>
          <p>
            A user-friendly resume builder application where users can fill out a form and generate a well-structured resume layout instantly.
          </p>
          <a href="https://github.com/Pooja-Saini54/Taskjs" target="_blank" rel="noopener noreferrer"style={{ color: '#76ffff', textDecoration: 'none', fontWeight: 'bold' }}>🔗 Try It</a>
        </div>

        <div className="project-card">
          <h3>❌⭕ Tic-Tac-Toe</h3>
          <p>
            A classic 2-player game of Tic-Tac-Toe created using HTML, CSS, and JavaScript with a responsive layout and win detection logic.
          </p>
          <a href="https://github.com/Pooja-Saini54/Taskjs" target="_blank" rel="noopener noreferrer"style={{ color: '#76ffff', textDecoration: 'none', fontWeight: 'bold' }}>🔗 Play Now</a>
        </div>

        <div className="project-card">
          <h3>🌐 Website Clone</h3>
          <p>
            A pixel-perfect front-end clone of a popular website (e.g., Netflix, Amazon, or YouTube), focusing on layout, design, and responsiveness.
          </p>
          <a href="https://github.com/Pooja-Saini54/Taskjs" target="_blank" rel="noopener noreferrer"style={{ color: '#76ffff', textDecoration: 'none', fontWeight: 'bold' }}>🔗 See Clone</a>
        </div>

      </div>
    </div>
  );
}



export default Projects;
