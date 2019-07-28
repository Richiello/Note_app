
let NoteId = 2

export const addNote = text => ({
    type: 'ADD_NOTE',
    id: NoteId++,
    text
})

export const deleteNote = (id) => ({
    type: 'REMOVE_NOTE',
    id: id
})

export const editNote = (id) => ({
    type: 'EDIT_NOTE',
    id: id
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
