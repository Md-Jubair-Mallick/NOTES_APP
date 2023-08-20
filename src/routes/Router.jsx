import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layout/Navbar'
import CreateNotes from '../features/CreateNotes'
import ViewNotes from '../features/ViewNotes'
import ReadNotes from '../features/ReadNotes'
import UpdateNotes from '../features/UpdateNotes'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add/note' element={<CreateNotes />} />
        <Route path='/show/notes' element={<ViewNotes />} />
        <Route path='/read/note' element={<ReadNotes />} />
        <Route path='/edit/note' element={<UpdateNotes />} />
        <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
