import { combineReducers } from 'redux'
import notes from './notes'
import categoryFilter from './categories'

export default combineReducers({
    notes,
    categoryFilter
})
