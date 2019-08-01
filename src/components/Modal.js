import React from 'react'
import { AddModal, ModalContainer } from '../styles/styles'
import { styled } from '@material-ui/styles'

const CloseButton = styled(`button`)({
    position: 'absolute',
    margin: '5px',
    right: 0,
    border: 'none',
    background: 'none',
    color: 'red',
    cursor: 'pointer',
    '&:focus': {
        outline: 'none'
    }
})

const ModalAdd = ({ children, show }) => {

    return (
        <ModalContainer style={{ display: show ? 'block' : 'none' }}>
            <AddModal >
                <CloseButton onClick={show}>
                    X
                </CloseButton>
                {children}
            </AddModal>
        </ModalContainer >
    )
}

export default ModalAdd
