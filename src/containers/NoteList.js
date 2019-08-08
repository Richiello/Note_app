import React from 'react'
import PropTypes from 'prop-types'
import Note from '../components/Note'
import { NoteContainer } from '../styles/styles'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

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
        <>
            <SearchBar
                searchText={searchValue}
                onChange={handleChange}
            />
            <CategoryFilter />
            <NoteContainer>
                {filteredNotes.map(n => (
                    <Note key={n.id} note={n} />
                ))}
            </NoteContainer >
        </>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default NoteList
