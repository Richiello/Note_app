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

export const setCategoryFilter = filter => ({
    type: 'SET_CATEGORY_FILTER',
    filter
})

export const categoryFilters = {
    SHOW_ALL: 'ALL',
    SHOW_WORK: 'WORK',
    SHOW_HOME: 'HOME',
    SHOW_FUN: 'FUN'
}
