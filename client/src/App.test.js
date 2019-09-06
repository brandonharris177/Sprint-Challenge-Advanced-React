import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import useDarkMode from './components/useDarkMode';

test('should have text [player name]',  async ()=>{
  const {findByText} = await render(<App />)
  findByText(/[player name]/i)
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
