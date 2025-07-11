import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Navbar from './Component/Navbar.jsx';
import Contact from './Component/Contact.jsx';
import Services from './Component/Services.jsx';
import Projects from './Component/Projects.jsx';
import Footer from './Component/Footer.jsx';
import logo from './assets/logo.png'; 



function App() {
  return (
    <>
      <BrowserRouter>
        <div id='myHeader' >
          
        <img src={logo} alt="Portfolio logo"/>
        <h1><span class="highlight">Port</span>Folio</h1>
        
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Projects' element={<Projects />} />

        </Routes>
       <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App;
