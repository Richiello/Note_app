import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import { styled } from '@material-ui/styles'

export const NoteCard = styled(Card)({
    background: 'linear-gradient(45deg, #64b8a7 30%, #64b8a7 90%)',
    borderRadius: 3,
    boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .2)',
    color: 'white',
    width: '20%',
    maxWidth: '20%',
    padding: '0 20px',
    margin: '15px 5px',
    height: '200px',
    overflow: 'scroll',
    position: 'relative'
})

export const NoteContainer = styled(`div`)({
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto'
})


export const TextField = styled(`textarea`)({
    width: '100%',
    padding: '15px',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    height: '200px',
    resize: 'none',
    '&:focus': {
        outline: 0
    }
})

export const CardFooter = styled(CardActions)({
    position: 'absolute',
    bottom: '10px',
    right: '10px',
})

export const CardHeader = styled(`div`)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0 20px',
    '& p': {
        margin: 0,
    }
})

export const CardContent = styled(`div`)({
    display: 'block',
    textAlign: 'center'
})

export const ModalContainer = styled(`div`)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 99999
})

export const AddModal = styled(`div`)({
    position: 'absolute',
    minWidth: 400,
    minHeight: 200,
    backgroundColor: '#dce8e6',
    color: '#545454',
    borderRadius: '2%',
    padding: '15px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
})

export const Button = styled(`button`)({
    width: '150px',
    margin: '15px 0 5px',
    height: '40px',
    backgroundColor: '#67aba0',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '25px',
    '&:focus, :active': {
        outline: 'none'
    }
})
