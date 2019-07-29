import React, { useState } from 'react'
import { editNote } from '../actions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { ModalContainer, TextField } from '../styles/styles'

export const EditModal = ({ dispatch, open, close, text, id }) => {

    const [newText, setNewText] = useState(text)

    const handleChange = (event) => {
        setNewText(event.target.value)
    }

    return (
        <div>
            <ModalContainer
                open={open}
                onClose={close}
            >
                <div style={{ width: '100%', textAlign: 'center', backgroundColor: 'white' }}>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            dispatch(editNote(id, newText))
                            close()
                        }}
                    >
                        <TextField value={newText} onChange={handleChange} cols={40} rows={10} />
                        <Button variant="contained" type="submit" color="primary">
                            Save Note
                        </Button>
                    </form>
                </div>
            </ModalContainer>
        </div>
    )
}

export default connect()(EditModal)