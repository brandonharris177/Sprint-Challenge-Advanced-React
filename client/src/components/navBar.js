import React, { useState } from 'react';
import useAmericaMode from './useAmericaMode';
import '../App.css';

const Navbar = () => {             
  // const [americaMode, setAmericaMode] = useState(false); //
  const [americaMode, setAmericaMode] = useAmericaMode(false);//this calls the useAmericaMode hook and sets the inital value to false (Dark mode off)
  const toggleMode = e => {
    e.preventDefault();
    setAmericaMode(!americaMode);//this is a switch, if darkmode is on it turns it off, if it is off it turns it on
  };
  
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}//flips the switch
          className={americaMode ? 'toggle toggled' : 'toggle'}//if dark mode is on turn it off its its off turn it on
        />
      </div>
    </nav>
  );
};

export default Navbar;