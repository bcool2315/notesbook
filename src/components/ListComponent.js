import React, { useEffect, useState } from 'react'
import { collection, query, getDocs, where, onSnapshot, deleteDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

function ListComponent({rerender, setNoteDetails}) {
  const ref = collection(db, 'notes')

  const q = query(ref, where('uid', '==', auth.currentUser.uid))

  const [data, setData] = useState([])

  
  
  useEffect(() => {
    const getSnapShot = async () => {
      const snapShot = await getDocs(q
        )
      let getData = snapShot.docs.map((doc)=>({...doc.data(), id: doc.id}))
      setData(getData)
      
      console.log(getData)
 

    }


    getSnapShot()

  }, [rerender])


  

  return (
    <div className='notes-list'>
      <ul>
      {data.map((doc)=>(
        
        <li onClick={()=>(setNoteDetails(doc))}
         key={doc.id}>
          {doc.title}</li>
        

        
      ))}
      </ul>
    </div>
  )
}

export default ListComponent