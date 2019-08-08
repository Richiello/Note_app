import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CardActionArea from '@material-ui/core/CardActionArea'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import EditModal from '../containers/EditModal'
import { deleteNote } from '../actions'
import { NoteCard, CardFooter } from '../styles/styles'
import { connect } from 'react-redux'
import { styled } from '@material-ui/styles'

const TimeStamp = styled(`p`)({
    fontSize: '11px',
    color: '#f9f9f9',
    fontStyle: 'italic',
    textAlign: 'right'
})

const Note = ({ note, dispatch }) => {
    const [activeNote, setActiveNote] = useState()
    const [showModal, setShowModal] = useState(false)

    const setActiveId = (id) => {
        toggleModal()
        setActiveNote(id)
    }

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <NoteCard key={note.id}>
                <CardActionArea>
                    <TimeStamp>
                        {note.createdAt}
                    </TimeStamp>
                    <p>
                        {note.text}
                    </p>
                </CardActionArea>
                <CardFooter>
                    <Fab size='small' aria-label='delete' >
                        <EditIcon onClick={() => setActiveId(note.id)} />
                    </Fab>
                    <Fab size='small' aria-label='delete' onClick={() => dispatch(deleteNote(note.id))} >
                        <DeleteIcon />
                    </Fab>
                </CardFooter>
            </NoteCard>
            {activeNote === note.id && <EditModal show={showModal} toggleModal={toggleModal} text={note.text} id={note.id} />}
        </>
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
