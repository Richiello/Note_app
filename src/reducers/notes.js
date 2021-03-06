const INITIAL_STATE = {
    id: 0,
    text: 'My first note',
    category: 'WORK',
    createdAt: '1 Aug 2019 14:30'
}

const notes = (state = [INITIAL_STATE], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    category: action.category,
                    createdAt: action.createdAt
                }
            ]
        case 'EDIT_NOTE':
            return state.map(note =>
                (note.id === action.id)
                    ? { ...note, text: action.text }
                    : note
            )
        case 'DELETE_NOTE':
            const numIndex = parseInt(action.id)
            return state.filter(note => note.id !== numIndex)
        default:
            return state
    }
}

export default notes
