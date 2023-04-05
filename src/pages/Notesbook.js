import React, { useState } from 'react'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'
import {signOut} from 'firebase/auth' 
import NewNote from '../components/NewNote'
import ListComponent from '../components/ListComponent'
import NoteDetails from '../components/NoteDetails'

function Notesbook() {
  const [isNewNote, setIsNewNote] = useState(false)
  const [rerender, setReRender] = useState(1)
  const [noteDetails, setNoteDetails] = useState([])

  if (!auth.currentUser) {

    return <Navigate to="/signin" replace={true} />
   }

  return (
    <div className='notesbook-container'>
      <div className='inner-container'>
        <div className='bar'>
          <p>NOTESBOOK</p>
          <p onClick={()=>{signOut(auth)}}>{auth.currentUser.email}</p>
        </div>
        <div className='notesbook'>
          <div className='list'>
            <ListComponent rerender={rerender} setNoteDetails={setNoteDetails} />
          </div>
          <NoteDetails setIsNewNote={setIsNewNote} setReRender={setReRender} noteDetails={noteDetails} />
        </div>
      </div>
      {isNewNote && <NewNote setIsNewNote={setIsNewNote} setReRender={setReRender} />}
      
    </div>
  )
}

export default Notesbook