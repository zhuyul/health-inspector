import React from 'react';

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

                </form>
            </div>
        )
    }
}

export default SearchBar