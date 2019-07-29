import React from 'react'
import { styled } from '@material-ui/styles'

const SearchField = styled(`input`)({
    position: 'fixed',
    display: 'flex',
    right: '20px',
    top: '35px',
    width: '20%',
    padding: '10px'
})

const SearchBar = ({ onChange, searchText }) => (
    <SearchField
        placeholder="Search"
        onChange={e => onChange(e.target.value)}
        value={searchText} />
)

export default SearchBar