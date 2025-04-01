import { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const NotesContext = createContext(null)
const NotesDispatchContext = createContext(null)

function notesReducer(state, { type, payLoad }) {
    switch (type) {
        case 'add':
            return [...state, payLoad]
        case 'delete':
            return state.filter(note => note.id !== payLoad)
        case 'complete':
            return state.map(note => note.id === payLoad ? { ...note, completed: !note.completed } : note)
        default:
            throw new Error("unkown Error" + type)
    }
}

export function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(notesReducer, [])

    return (
        <NotesContext.Provider value={notes}>
            <NotesDispatchContext value={dispatch}>
                {children}
            </NotesDispatchContext>
        </NotesContext.Provider>
    )
}

export function useNotes() {
    return useContext(NotesContext)
}

export function useDispatchNotes() {
    return useContext(NotesDispatchContext)
}