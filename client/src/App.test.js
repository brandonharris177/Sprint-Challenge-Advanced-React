import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import useDarkMode from './components/useDarkMode';

test ('darkMode Changes Class'), () => {
  expect(useDarkMode(false)).toBe(false)
  expect(useDarkMode(false)).toBe(false)
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
