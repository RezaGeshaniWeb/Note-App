import { useNotes } from '../context/NotesContext'

function Header({ sortBy, onSort }) {
  const notes = useNotes()

  return (
    <header>
      <h2>
        My Notes
        (<span>{notes.length}</span>)
      </h2>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </header>
  )
}

export default Header
