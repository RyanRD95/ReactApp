import React from 'react';
import Catalog from './components/Catalog.jsx';
import Nav from './components/Nav.jsx'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'guest',
            books: [
                {
                    id: '1644450003',
                    title: 'Milkman: A Novel',
                    author: 'Anna Burns',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/1644450003',
                    price: 7.99
                },
                {
                    id: '1594206252',
                    title: 'Feel Free: Essays',
                    author: 'Zadie Smith',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51NLFKhZnIL._SX327_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/1594206252',
                    price: 16.16
                },
                {
                    id: '0525520376',
                    title: 'There There: A novel',
                    author: 'Tommy Orange',
                    amazonImage: 'https://images-na.ssl-images-amazon.com/images/I/51RuAbKH%2BtL._SX326_BO1,204,203,200_.jpg',
                    amazonUrl: 'https://www.amazon.com/dp/0525520376',
                    price: 11.46
                }
            ],
            chartItems: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addToChart = this.addToChart.bind(this);
    }

    handleInputChange(event){
        this.setState({
            username: event.target.value
        })
    }
    addToChart(event) {
        console.log(event.target.id);
        const item = this.state.books.find(book => book.id === event.target.id);
        console.log(item);
        this.setState({
            chartItems: [...this.state.chartItems, item]
        })
    }
    render() {

        return (
            <div className="app">

                <Nav
                    chartItems={this.state.chartItems}
                />

                {this.state.username.length <= 1 &&
                <div>
                    <h3>Welcome! Please enter username to view catalog: </h3>
                    <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                </div>
                }

                {this.state.username.length > 1 &&

                < Catalog
                    books = {this.state.books}
                    addToChart = {this.addToChart}
                    />
                }
            </div>
        );
    }
}

export default App;
