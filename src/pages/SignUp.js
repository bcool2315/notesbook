import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'


function SignUp() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = async()=> {
    try {
      const data = await createUserWithEmailAndPassword(auth,email, password)
      console.log(data)
      navigate('/')

    }catch(error) {
      console.log(error.message)
    }

  }

  return (
    <div className='big-container'>
      <div className='signin-container'>
        <h3>Sign Up</h3>
        <form>
          <label htmlFor='email'>EMAIL</label>
          <input onChange={(event) => setEmail(event.target.value)} id='email' />
          <label htmlFor='password'>PASSWORD</label>
          <input type='password' onChange={(event) => setPassword(event.target.value)} id='password' />
          <span onClick={createUser}>SIGN UP</span>
        </form>

        <Link to='/signin'>
        <p>Sign In to Existing Account</p>
        </Link>  
        
      </div>
    </div>
  )
}

export default SignUp