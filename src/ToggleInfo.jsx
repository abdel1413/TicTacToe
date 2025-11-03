export const ToggleInfo =(props)=>{
    return<>
    <button onClick={props.onClick}>{ props.toggled? "Close ": "Details"}</button>
    { props.toggled &&(
    <p className="instruction"> To win the game, you need to have same player in three rows
        either vertically or horizontally or obliquely</p>
        )}
    </>
}