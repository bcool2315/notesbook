import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'

function SignIn({setUser}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async() => {
    try {
      const data =  await signInWithEmailAndPassword(auth,email, password)
    console.log(data)
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        setUser(true)
        navigate('/')
      }else {
        setUser(false)
      }
    })
    
    }catch(error) {
      console.log(error.message)
    }
    
  }

  return (
    <div className='big-container'>
      <div className='signin-container'>
        <h3>Sign In</h3>
        <form>
          <label htmlFor='email'>EMAIL</label>
          <input onChange={(event) => setEmail(event.target.value)} id='email' />
          <label htmlFor='password'>PASSWORD</label>
          <input type='password' onChange={(event) => setPassword(event.target.value)} id='password' />
          <span type='submit' onClick={signIn}>SIGN IN</span>
        </form>

        <Link to='/signup'>
          <p>Register New Account</p>
        </Link>
      </div>
    </div>
  )
}

export default SignIn