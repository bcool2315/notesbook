import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase'
import { collection, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import DeleteNote from './DeleteNote'

function NoteDetails({setIsNewNote, noteDetails, setReRender}) {
    const [inputValue, setInputValue] = useState()
    const [textarea, setTextarea] = useState()
    const [id, setId] = useState('')
    
    
    useEffect(()=>{
        setInputValue(noteDetails.title)
        setTextarea(noteDetails.note)
        
    }, [noteDetails.title, noteDetails.note])


    console.log(noteDetails.id)

    const update = async() => {
        try{
            await updateDoc(doc(db, 'notes', noteDetails.id), {
                title: inputValue,
                note: textarea,
                
            })
            setReRender(Math.random())
        }catch(error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        update()
    }, [inputValue, textarea])

  

  return (
    <div className='content'>
            <input onChange={(event)=>setInputValue(event.target.value)} value={inputValue}/>

            <textarea onChange={(event)=>setTextarea(event.target.value)}  value={textarea}></textarea>
            <DeleteNote id={noteDetails.id} setReRender={setReRender} setInputValue={setInputValue} setTextarea={setTextarea} title={noteDetails.title} />
            <button onClick={()=>{setIsNewNote(true)}}>NEW NOTE</button>
          </div>
  )
}

export default NoteDetails