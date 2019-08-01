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

export const CardFooter = styled(CardActions)({
    position: 'absolute',
    bottom: '10px',
    right: '10px',
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
    position: 'fixed',
    minWidth: 400,
    minHeight: 200,
    display: 'flex',
    margin: 'auto',
    backgroundColor: '#dce8e6',
    color: '#fff',
    borderRadius: '2%',
    outline: 'none',
    padding: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'

})

export const TextField = styled(`textarea`)({
    outline: 'none',
    border: 'none',
    display: 'block',
    margin: '10px auto'
})
