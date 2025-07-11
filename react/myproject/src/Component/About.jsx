import React from 'react';
import './About.css';
import  img from '../assets/logo2.jpg';
function About(){
return(
<div class='Abut'>
    
  <div className="about-img"><img src={img} alt="" /></div>
  <div class="about-p">
<h2>About Me</h2>
<p>
     I love exploring <span>front-end</span> and <span>back-end</span> technologies, and I'm currently working on improving my skills in <span>HTML, CSS, JavaScript</span>, and the<span> MERN stack</span>.
      
I'm a creative and detail-oriented full-stack learner with a focus on front-end design and user experience. I specialize in building dynamic and responsive websites using technologies like<span> React, Node.js, and MongoDB</span>. I love turning ideas into reality with clean and efficient code.
</p>
<p>
When I'm not coding, I enjoy exploring new tech, reading, and participating in open-source communities.
</p>
</div>
</div>
)}

export default About;