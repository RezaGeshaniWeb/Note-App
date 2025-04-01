import { useState } from 'react'
import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'
import { NotesProvider } from './context/NotesContext'
import Header from './components/Header'
import Info from './components/Info'

function App() {
  const [sortBy, setSortBy] = useState('latest')

  return (
    <NotesProvider>
      <main>
        <Header sortBy={sortBy} onSort={e => setSortBy(e.target.value)} />
        <section>
          <AddNewNote />
          <div>
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </section>
        <Info />
      </main>
    </NotesProvider>
  )
}

export default App