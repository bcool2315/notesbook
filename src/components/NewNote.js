import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { auth } from '../firebase'



function NewNote({setIsNewNote, setReRender}) {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [titleValue, setTitleValue] = useState('')
    const [noteValue, setNoteValue] = useState('')

    const addNote = async(event)=> {
        event.preventDefault()
        const docRef = collection(db, 'notes')
        try{
            await addDoc(docRef, {
                title: title,
                note: note,
                uid: auth.currentUser.uid,
            })
            setTitleValue('')
            setNoteValue('')
            setIsNewNote(false)
            setReRender(Math.random)


        }catch(error) {
            console.log(error.message)
        }

    }

  return (<>
    <div className='new-note-container'>
    <div className='new-note-inner-container'>
      <form>
        <label htmlFor='title'>Notes Title</label>
        <input value={titleValue} 
        onChange={(event)=>{
          setTitleValue(event.target.value)
          setTitle(event.target.value)}
        } 
        id='title'></input>
        <label htmlFor='Type your new note'>Type your new note</label>
        <textarea value={noteValue} 
        onChange={(event)=>{
          setNoteValue(event.target.value)
          setNote(event.target.value)
        }}
        id='Type your new note'></textarea>
        <button onClick={addNote}>SAVE</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default NewNote