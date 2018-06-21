
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
         <Button variant="contained" color="secondary" >
        Secondary
      </Button>
        <p>
            {this.state.info.map(book=> (
                <ul key = {book.id}
                    Name : {book.name}
                </ul>
            ))}
        </p>
      </div>
    );
  }
}

export default App;
