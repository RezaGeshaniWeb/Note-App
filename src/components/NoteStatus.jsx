import Message from './Message'
import { useNotes } from '../context/NotesContext'

function NoteStatus() {
  const notes = useNotes()

  const allNotes = notes.length
  const completedNotes = notes.filter(n => n.completed).length
  const uncompletedNotes = notes.filter(n => !n.completed).length

  if (!allNotes) {
    return <ul>
      <Message>
        <h4 className='li-title'>No Notes has already been added .</h4>
      </Message>
    </ul>
  }

  return (
    <ul>
      <li>All ( <span>{allNotes}</span> )</li>
      <li>Completed ( <span>{completedNotes}</span> )</li>
      <li>Uncompleted ( <span>{uncompletedNotes}</span> )</li>
    </ul>
  )
}

export default NoteStatus
