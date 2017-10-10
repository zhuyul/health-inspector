import React from 'react';
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

    constructor(){
        super()

        // bind to jsx
        this.state = {
            search: ''
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            // bind data from input form to state
            // input.name and input.value
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateSearchTerm(this.state.search)

    }

    // return html
    render() {
        return (
            //jsx cannot use keyword: class
            <div className="searchbar-container">
                <form className="search-form">
                    <input 
                        type = "search"
                        name = "search"
                        value = {this.state.search}
                        className = "search-input"
                        placeholder = "Search Restaurants"
                        // when user make change in search bar
                        onChange = {this.handleSearchChange}
                    />
                    <button 
                        type = "submit"
                        className = "search-button"
                        onClick = {this.handleSubmit}
                    >
                        <i className = "search-icon fa fa-search" />
                    </button>

                </form>
            </div>
        )
    }
}

PropTypes.PropTypes = {
    updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar