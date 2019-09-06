import React from 'react';
import './App.css';
import axios from 'axios'
import Display from './components/Display'
import NavBar from './components/navBar'

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
    // console.log(this.state.user)
    // console.log(this.state.followers)
    return (
      <>
        <NavBar />
        <Display propsToDisplay = {this.state.players}/>
      </>
    );
  }
}

export default App;


// {this.players.map(player => 
//  <div key = {player.id}>
//    <div>{player.name}</div>
//  </div>