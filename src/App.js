import React from 'react';
import Catalog from './components/Catalog.jsx';
//import Notes from './components/Notes.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div className="App" style={{padding: '2vw'}}>
                <h3>Welcome! Please enter username to view catalog: </h3>
                <input name="username" value={this.state.username} onChange={this.handleInputChange} />

                {this.state.username.length > 1 &&

                < Catalog
                    textSize="small"
                    age={5}
                    />
                }
            </div>
        );
    }
}

export default App;
