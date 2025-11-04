
export const ToggleInfo =({onclick, toggled})=>{

    return<>
    <button onClick={onclick} className="toggle-info">{toggled? "Close " : "Details"}</button>
    { 
      <div className={`toggle-content ${toggled ? "visible":"hidden"}`}>
        <p> To win the game, you need to have same player in three rows
        either vertically or horizontally or obliquely</p>
        </div>

        }

    </>
}