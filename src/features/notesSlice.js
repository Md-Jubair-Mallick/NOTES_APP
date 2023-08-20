import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'
export const notesSlice= createSlice({
    name: 'notes',
    initialState: {
        notes: [
            { 
                id: uuidv4(),
                title: 'My daily routine',
                description: `a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description.`
            },
            { 
                id: uuidv4(),
                title: 'A story',
                description: `a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description.`
            }
        ]
    },
    reducers: {
        createNotes: (state, action)=> {
            state.notes.push(action.payload)
        },
        editNotes: (state, action)=> {
            const { id, title, description }= action.payload;
            const note= state.notes.filter((note)=> note.id === id);
            note[0].title= title;
            note[0].description= description;
        },
        deleteNotes: (state, action)=> {
            const id= action.payload;
            state.notes = state.notes.filter((note)=> note.id !== id)
        }
    }
})

export const { createNotes, editNotes, deleteNotes }= notesSlice.actions;
export default notesSlice.reducer;