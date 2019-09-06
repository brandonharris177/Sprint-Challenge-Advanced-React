import {useState, useEffect} from 'react';

const useDarkMode = (initalValue) => {
    const [darkMode, setDarkMode] = useState(initalValue); 
    // console.log(trueOrFalse)
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            // console.log(`dark-mode added`)
        } else {
            document.body.classList.remove('dark-mode');
            // console.log(`dark-mode removed`)
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
  };

  export default useDarkMode