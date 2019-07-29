import React from 'react'
import AddNote from '../containers/AddNote'
import Divider from '@material-ui/core/Divider'
import NoteList from './NoteList'

const App = () => (
    <div>
        <AddNote />
        <Divider style={{ margin: '20px 0' }} />
        <NoteList />
    </div>
)

export default App
