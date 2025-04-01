import { useState } from 'react'
import { useDispatchNotes } from '../context/NotesContext'

function AddNewNote() {
    const dispatch = useDispatchNotes()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!title || !description) return null
        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString()
        }
        dispatch({ type: 'add', payLoad: newNote })
        setTitle('')
        setDescription('')
    }

    return (
        <div className='add-new-note'>
            <h2>Add New Note</h2>
            <form autoComplete='off' spellCheck="false" onSubmit={handleSubmit}>
                <input value={title} onInput={e => setTitle(e.target.value.trim())} type="text" placeholder='Note Title' />
                <input value={description} onInput={e => setDescription(e.target.value.trim())} type="text" placeholder='Note Description' />
                <button>Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote
