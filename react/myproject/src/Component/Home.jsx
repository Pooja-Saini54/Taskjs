import React from 'react';
import './Home.css';
import logo from '../assets/logo1.jpg'; 

function Home(){
    return( 


    <div className="home">
        <div id="h">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm <strong>Pooja Saini</strong> — a passionate learner on the journey to becoming a skilled web developer.
       
      </p>
      <p>
        Feel free to explore my projects, learn more about me, or get in touch. I'm excited to keep learning and growing in the world of web development!
      </p>
        <button>Contact Me</button>
      </div>
      <div id="profile">
        <img src={logo} alt="logo" />
      </div>
    
    </div>

  );}
export default Home;