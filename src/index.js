import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// no need for .js, react knows ;)
import SearchBar from './components/SearchBar'

const App = () => {

    return(
        <div>
            <SearchBar />
        </div>
    )
}

// connecting piece in react - what connects react code to html
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
