import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editNotes } from './notesSlice';

export default function UpdateNotes() {

  const location= useLocation();
  const navigate= useNavigate();
  const [title, setTitle]= useState(location.state.title)
  const [description, setDescription]= useState(location.state.description)
  const id= location.state.id;
  const dispatch= useDispatch();
  const handelSubmit= (e)=> {
    e.preventDefault();
    dispatch(editNotes({ id, title, description }));
    navigate('/show/notes');
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>Title</label>
        <input placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <label>Description</label>
        <input placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
