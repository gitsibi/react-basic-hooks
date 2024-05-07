import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){

    const [context,setText] =  useState(false)
    const [noLikes,setLike] =  useState(0)

    useEffect(() => {
        alert("Button Clicked")
    },[context])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem",
  }

  return(
    <div style={themeStyle}>
      <button className="flex" onClick={() => setText(!context)}>Content</button>
      {context && <h5>useState allows functional components to manage state. With useState, you can declare state variables and update them within your components. It enables performing side effects in functional components. useEffect runs after every render and is useful for data fetching, subscriptions, or manually changing the DOM.useContext enables functional components to access context values without explicitly consuming a Context.Consumer. With useContext, you can directly access the current context value provided by the nearest Context.Provider ancestor. </h5> }
      <br />
      <button className="flex" onClick={() => setLike(noLikes + 1)}>Likes</button>
      <h2>{noLikes}</h2>
    </div>
  )
}

export default UseContext;