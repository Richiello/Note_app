import React from 'react'
import { styled } from '@material-ui/styles'
import { categoryFilters } from '../actions'

const HorizontalList = styled(`ul`)({
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'space-between',
    width: '250px',
    margin: '20px auto',
    alignItems: 'center',
    padding: '0',
    textDecoration: 'underline',
    color: '#98b2a1',
    '& a': {
        cursor: 'pointer'
    }
})

const CategoryFilter = () => {
    return (
        <HorizontalList>
            {Object.keys(categoryFilters).map(a =>
                <li key={a}>
                    <a>
                        {categoryFilters[a]}
                    </a>
                </li>
            )}
        </HorizontalList>
    )
}

export default CategoryFilter
