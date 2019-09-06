import React from 'react';
import './App.css';
import axios from 'axios';
import Display from './components/Display';
import NavBar from './components/navBar';

class App extends React.Component {
  constructor() {
    super ()
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({ players: res.data })
      )
      .catch(err => console.log("error", 'Server Error')
      )
  }

  render () {
    return (
      <>
        <div className = "App">
          <NavBar />
          <Display propsToDisplay = {this.state.players}/>
        </div>
      </>
    );
  }
}

export default App;