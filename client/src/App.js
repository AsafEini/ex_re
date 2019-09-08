import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [state, setState] = useState({name:'mosh'});
    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/',{mode: 'cors'});
            const parseRes = await response.json();
            setState(parseRes);
        };
        fetchData()
    },[]);
  return (
    <div className="App">
        {state.name}
    </div>
  );
}

export default App;
