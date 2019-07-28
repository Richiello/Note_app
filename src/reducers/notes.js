const INITIAL_DATA = [
    {
        id: 0,
        text: 'Note 1',
    },
    {
        id: 1,
        text: 'Note 2',

    },
]

const NoteReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'EDIT_NOTE':
            return state.map(note =>
                (note.id === action.id)
                    ? { ...note, completed: !note.completed }
                    : note
            )
        case 'REMOVE_NOTE':
            const numIndex = parseInt(action.id)
            return state.filter(note => note.id !== numIndex);
        default:
            return state
    }
}

export default NoteReducer
