import React,{ useState } from 'react';
import './App.css';
import Hookstask from "./Components/Hookstask"

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Hookstask/>
    </ToggleTheme.Provider>
  );
}

export default App;