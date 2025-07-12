import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserPage from './UserPage';
import User from './User';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<User/>}/>
         <Route path="/userPage/:id" element={<UserPage/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
