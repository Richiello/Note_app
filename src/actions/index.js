let NoteId = 1

export const addNote = text => ({
    type: 'ADD_NOTE',
    id: NoteId++,
    text
})

export const deleteNote = id => ({
    type: 'DELETE_NOTE',
    id
})

export const editNote = (id, text) => ({
    type: 'EDIT_NOTE',
    id,
    text
})
