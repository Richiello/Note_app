import NoteList from './NoteList'
import { connect } from 'react-redux'
import { categoryFilters } from '../actions'

const VisibleNotes = (notes, filter) => {
    switch (filter) {
        case categoryFilters.SHOW_ALL:
            return notes
        case categoryFilters.SHOW_WORK:
            return notes.filter(n =>
                n.category === categoryFilters.SHOW_WORK
            )
        case categoryFilters.SHOW_HOME:
            return notes.filter(n =>
                n.category === categoryFilters.SHOW_HOME
            )
        case categoryFilters.SHOW_FUN:
            return notes.filter(n =>
                n.category === categoryFilters.SHOW_FUN
            )
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    notes: VisibleNotes(state.notes, state.categoryFilter)
})

export default connect(
    mapStateToProps
)(NoteList)
