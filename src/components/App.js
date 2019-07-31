import React from 'react'
import AddNote from '../containers/AddNote'
import Divider from '@material-ui/core/Divider'
import NoteList from '../containers/NoteList'
import VisibleNotes from '../containers/VisibleNotes'

const App = () => (
    <div>
        <AddNote />
        <Divider style={{ margin: '20px 0' }} />
        <VisibleNotes />
    </div>
)

export default App
