

import { useState } from "react";
import "../App.css"

function Usestate() {
    const [currAge,setAge] = useState(19);
    const [currSib, setSib] = useState(1);
    
    const handleAge = ()=>{
      setAge(currAge+1);
    }
  
    const handleSib = ()=>{
      setSib(currSib+1);
    }
  
  
    return (
      <div>
        <h3>My Current Age is {currAge}</h3>
        <h4>My siblings {currSib}</h4>
  
        <button onClick={handleAge}>Get Older</button>
        <button onClick={handleSib}>Get more Sib</button>
      </div>
    );
}

export default Usestate