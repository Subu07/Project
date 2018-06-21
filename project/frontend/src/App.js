
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData = () => {
        fetch("http://127.0.0.1:8000/booklist/")
            .then(response => response.json()) //transform the data into JSON
            .then(JSON => JSON.map(data => ({
                id: data.id,
                name: data.name
            })))
            .then( data => this.setState({
                info: data
            }))
            .catch(error => console.log(error))
    };
  render() {
    return (
      <div className="App">

        <p>
            {this.state.info.map(book=> (
                <ul>
                    <li>key = {book.id}</li>
                    <li>Name : {book.name}</li>
                </ul>
            ))}
        </p>
      </div>
    );
  }
}

export default App;
