import {useState, useEffect} from 'react';

const useAmericaMode = (initalValue) => {
    const [americaMode, setAmericaMode] = useState(initalValue); 
    // console.log(trueOrFalse)
    useEffect(() => {
        if (americaMode) {
            document.body.classList.add('dark-mode');
            // console.log(`dark-mode added`)
        } else {
            document.body.classList.remove('dark-mode');
            // console.log(`dark-mode removed`)
        }
    }, [americaMode])

    return [americaMode, setAmericaMode];
  };

  export default useAmericaMode