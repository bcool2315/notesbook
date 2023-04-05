
import Notesbook from './pages/Notesbook';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {BrowserRouter, Routes, Route, useNavigate, redirect, Navigate} from 'react-router-dom';
import { auth } from './firebase';
import { useState } from 'react';

function App() {
  
  const [user, setUser] = useState(null)
  console.log(user)
  
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Notesbook />}  /> 
        <Route path='/signin' element={<SignIn setUser={setUser} />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

