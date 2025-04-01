import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatchNotes, useNotes } from '../context/NotesContext'

function NoteList({ sortBy }) {
    const notes = useNotes()

    let sortedNotes = notes
    if (sortBy === 'earliest')
        sortedNotes = [...notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))]
    if (sortBy === 'latest')
        sortedNotes = [...notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))]
    if (sortBy === 'completed')
        sortedNotes = [...notes.sort((a, b) => +a.completed - +b.completed)]

    return (
        <div>
            {sortedNotes.map((note) => <NoteItem key={note.id} note={note} />)}
        </div>
    )
}

export default NoteList


function NoteItem({ note }) {
    const dispatch = useDispatchNotes()

    const option = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return (
        <div>
            <div>
                <h3 className={`${note.completed ? 'completed' : ''}`}>{note.title}</h3>
                <p>{note.description}</p>
                <p>{new Date(note.createdAt).toLocaleDateString('en-US', option)}</p>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'delete', payLoad: note.id })}>
                    <RiDeleteBin6Line />
                </button>
                <input
                    onChange={e => {
                        const id = +e.target.value
                        dispatch({ type: 'complete', payLoad: id })
                    }}
                    type="checkbox"
                    value={note.id} />
            </div>
        </div>
    )
}