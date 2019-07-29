import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import EditModal from '../containers/EditModal'
import { deleteNote } from '../actions'
import { NoteCard, CardFooter } from '../styles/styles'
import { connect } from 'react-redux'

const Note = ({ note, dispatch }) => {
    const [open, setOpen] = React.useState(false)
    const [activeId, setActiveId] = useState()

    const showModal = (id) => {
        setOpen(true)
        setActiveId(id)
    }

    const closeModal = (e) => {
        setOpen(false)
    }

    return (
        <NoteCard key={note.id}>
            <CardActionArea>
                <CardContent>
                    {note.text}
                </CardContent>
            </CardActionArea>
            <CardFooter>
                <Fab size='small' aria-label='delete' >
                    <EditIcon onClick={() => showModal(note.id)} />
                    {activeId === note.id && <EditModal text={note.text} id={note.id} open={open} close={closeModal} />}
                </Fab>
                <Fab size='small' aria-label='delete' onClick={() => dispatch(deleteNote(note.id))} >
                    <DeleteIcon />
                </Fab>
            </CardFooter>
        </NoteCard>
    )
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = state => ({
    notes: state.notes
})

export default connect(
    mapStateToProps
)(Note)