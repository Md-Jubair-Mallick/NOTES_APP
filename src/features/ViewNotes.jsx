import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function ViewNotes() {
    
  const notes= useSelector((state)=> state.notesReducer.notes)
  return (
    <>
    <article>
    {notes && notes.map((note)=> {
      const { id, title, description }= note;
      return (
        <div key={id}>
          <h1>{title}</h1>{/*title*/}
          <p>{description}</p>{/* description */}
          <button><Link to='/read/note' state={{ id, title, description }} >Read more ...</Link></button>
        </div>
        )})}
      </article>
    </>
  )
}
