import React, { useState, Fragment } from 'react'
import { editNote } from '../actions'
import { connect } from 'react-redux'
import { TextField } from '../styles/styles'
import ModalAdd from '../components/Modal'

export const EditModal = ({ dispatch, text, id, show, toggleModal }) => {
    const [newText, setNewText] = useState(text)

    const handleChange = (event) => {
        setNewText(event.target.value)
    }

    return (
        <Fragment>
            {
                show && <ModalAdd show={toggleModal}>
                    <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'white' }}>
                        <form
                            onSubmit={e => {
                                e.preventDefault()
                                dispatch(editNote(id, newText))
                                toggleModal()
                            }}
                        >
                            <TextField value={newText} onChange={handleChange} cols={40} rows={10} />
                            <button type='submit'>
                                Save
                            </button>
                        </form>
                    </div>
                </ModalAdd>
            }
        </Fragment>
    )
}

export default connect()(EditModal)
