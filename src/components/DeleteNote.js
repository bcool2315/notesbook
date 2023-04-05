import React from 'react'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'

function DeleteNote({id, setReRender, setInputValue, setTextarea, title}) {
    const deleteNote = async()=>{
        try {
            let docRef = doc(db, 'notes', id)
        await deleteDoc(docRef)
        setReRender(Math.random())
        setInputValue('')
        setTextarea('')
        }catch(error) {
            console.log(error.message)
        }
        
    }
  return (
    <div className='delete-button' onClick={deleteNote}>DeleteNote</div>
  )
}

export default DeleteNote