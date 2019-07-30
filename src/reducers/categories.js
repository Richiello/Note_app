import { categoryFilters } from '../actions'

const categoryFilter = (state = categoryFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            console.log([...state, action.type])
            return [
                ...state,
                action.type
            ]
        case 'SET_CATEGORY':
            return action.filter
        default:
            return state
    }
}

export default categoryFilter
