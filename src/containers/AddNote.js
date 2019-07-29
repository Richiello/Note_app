import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { styled } from '@material-ui/styles'

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
    let input

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', width: '100%'
        }}>
            < form
                onSubmit={
                    e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addNote(input.value))
                        input.value = ''
                    }
                }
            >
                <InputField placeholder="Add new note" ref={node => (input = node)}></InputField>
                <Fab type="submit" color="secondary" variant="extended" aria-label="add">
                    <AddIcon />
                </Fab>
            </form >
        </div >
    )
}

export default connect()(AddNote)
