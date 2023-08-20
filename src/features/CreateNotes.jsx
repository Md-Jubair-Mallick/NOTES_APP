import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNotes } from './notesSlice'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function CreateNotes() {

  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')
  const id= uuidv4();
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const handelSubmit= (e)=> {
    e.preventDefault();
    dispatch(createNotes({ id, title, description }))
    navigate('/show/notes');
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>Title</label>
        <input placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value) } required/>
        <label>Description</label>
        <input placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value) } required/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
