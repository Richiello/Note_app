import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { styled } from '@material-ui/styles'
import { categoryFilters } from '../actions'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import ModalAdd from '../components/Modal'
import moment from 'moment'

const InputField = styled(`input`)({
    width: '300px',
    padding: '14px 20px',
    margin: '8px 5px',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    '&:focus': {
        outline: 0
    }
})

const AddNote = ({ dispatch }) => {
    const [category, setCategory] = useState('Choose category')
    const [showModal, setShowModal] = useState(false)

    const onchange = (event) => {
        setCategory(event.target.value)
    }

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const newTimeStamp = moment().format('D MMM YYYY HH:mm')

    let input

    return (
        <Fragment>
            <Fab onClick={() => toggleModal()} type='submit' color='secondary' variant='extended' aria-label='add'>
                Add new note <AddIcon />
            </Fab>
            {showModal && <ModalAdd show={toggleModal}>
                <form
                    onSubmit={
                        e => {
                            let noteText = input.value
                            e.preventDefault()
                            if (!noteText.trim()) {
                                return
                            }
                            dispatch(addNote(noteText, category, newTimeStamp))
                            noteText = ''
                            toggleModal()
                        }
                    }
                >
                    <h4>Add new note:</h4>
                    <InputField placeholder='* Text' ref={node => (input = node)} />
                    < br />  < br />
                    <InputLabel >Category</InputLabel>
                    <Select value={category} onChange={e => onchange(e)} native >
                        <option value="" />
                        {Object.keys(categoryFilters).map((o, index) =>
                            <option key={index} value={categoryFilters[o]}>{categoryFilters[o]}</option>
                        )}
                    </Select>
                    < br />  < br />
                    <button type='submit'>
                        Save
                    </button>
                </form >
            </ModalAdd>}
        </Fragment>
    )
}

export default connect()(AddNote)
