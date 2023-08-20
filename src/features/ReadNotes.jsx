import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteNotes } from './notesSlice';
import { useDispatch } from 'react-redux';

export default function ReadNotes() {
  const location= useLocation();
  const navigate= useNavigate();
  const id= location.state.id;
  const title= location.state.title;
  const description= location.state.description;
  const dispatch= useDispatch();
  const deleteNote= (id)=> {
    dispatch(deleteNotes(id));
    navigate('/show/notes');
  }
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button><Link to='/edit/note' state= {{ id, title, description }}>Edit</Link></button>
      <button onClick={()=> {deleteNote(id)}}>delete</button>
    </div>
  )
}
