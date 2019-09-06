import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import axios from 'axios';

test('should have text Alex Morgan',  async ()=>{
  const {findByText} = await render(<App />)
  findByText(/Alex Morgan/i)
})

// test('should have text [player name]',  async ()=>{
//   const {findByText} = await render(<App />)
//   axios.get('http://localhost:5000/api/players')
//   .then(res => res.data.map(player => {
//     findByText(`${player.name}`)
//     console.log(player.name)
//   }))
// })

var Array = []

// function getPlayers() {
//   axios.get('http://localhost:5000/api/players')
//   .then(res => res.data.map(player => {
//     console.log(player.name)
//     Array.push(player.name)
//   })
//   )
// }


test('should have text [player name]',  async ()=>{
  const {findByText} = await render(<App />);
  await axios.get('http://localhost:5000/api/players')
  .then(res => res.data.map(player => {
    // console.log(player.name)
    Array.push(player.name)
  })
  )
  console.log(Array)
  Array.forEach(playerName => {
    findByText(playerName)
  })
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
