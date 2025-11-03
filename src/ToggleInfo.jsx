import { useState } from "react";

export const ToggleInfo =()=>{
    const [toggled, setToggled] =useState(false)
   
    const   handleToggle = ()=>{
        setToggled(!toggled)
      }
  
    return<>
    <button onClick={handleToggle} >{toggled? "Close " : "Details"}</button>
    { 
        <div className={`toggle-content ${toggled ? "visible":"hidden"}`}>
        <p> To win the game, you need to have same player in three rows
        either vertically or horizontally or obliquely</p>
        </div>

        }

    </>
}