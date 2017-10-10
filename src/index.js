import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// no need for .js, react knows ;)
import SearchBar from './components/SearchBar'

const App = () => {

    this.updateSearchTerm = (searchTerm) => {
        console.log(`We are search for ${searchTerm}`)
        this.getSearchData(searchTerm).then((data) => {
            console.log(data)
        })
    }

    this.getSearchData = async (searchTerm) => {
        let response
        try {

            response = await fetch (`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))`)     
        } catch (e) {
            console.log(e);
        }

        let data
        try {
            data = await response.json()
        } catch (e) {
            console.log(e)
        }

        return data
    }

    return(
        <div>
            <SearchBar 
                updateSearchTerm={this.updateSearchTerm}
            />
        </div>
    )
}

// connecting piece in react - what connects react code to html
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
