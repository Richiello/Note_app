import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCategoryFilter } from '../actions'

const FilterLink = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
)

FilterLink.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setCategoryFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink)
