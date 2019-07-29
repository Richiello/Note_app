import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Note from '../components/Note'
import { NoteContainer } from '../styles/styles'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'

const NoteList = ({ notes }) => {

    const [searchValue, setSearchValue] = React.useState('')

    const handleChange = (search) => {
        setSearchValue(search)
    }

    const filterNotes = () =>
        notes.filter(note =>
            note.text.toLowerCase().indexOf(
                searchValue.toLowerCase().trim()) !== -1
        )

    let filteredNotes = filterNotes()

    return (
        <Fragment>
            <SearchBar
                searchText={searchValue}
                onChange={handleChange}
            />
            <NoteContainer>
                {filteredNotes.map(n => (
                    <Note key={n.id} note={n} />
                ))}
            </NoteContainer >
        </Fragment>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

const mapStateToProps = state => ({
    notes: state.notes
})

export default connect(
    mapStateToProps
)(NoteList)
