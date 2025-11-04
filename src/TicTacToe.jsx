import { useState } from "react"
import { ToggleInfo } from "./ToggleInfo"
import { ResetBtn } from "./assets/ResetBtn"

export const TicTacToe =()=>{
    const initial = Array(9).fill(null)
    const [textContent,setTextContent] = useState(initial)
    const [isNext, setIsNext] = useState(true)
    const [winner, setWinner] = useState(null)
     const [toggled,setToggled] = useState(false)

    const gameWinner = (squares)=>{

        const possibleWinnings = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let [a,b,c] of possibleWinnings){
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }

        return null;

    }
    
  const handleClick = (index)=>{
     //prevent moves if the btn already has a content (X/O)
     // or there is already a winner(game ended)
     if(textContent[index]|| winner) return

    //copy the text content to avoid manipulating the original content
    const textContentCopied = textContent.slice()

  textContentCopied[index] = isNext? "X":"O";

  setTextContent(textContentCopied)

  const winning = gameWinner(textContentCopied)
   
    if(winning){
        setWinner(winning)
    }else if(textContentCopied.every(Boolean)){
        setWinner("Draw")
    }else{
        setIsNext(!isNext)
    }
}
let status 
    if(winner ==="Draw"){
       status = "It is draw";
    }else if(winner){
       status = `Winner: ${winner}`;
    }else{
       status = `Next Player ${isNext ? "X": "O"} `
    }

  const handleReset =()=>{
      setTextContent(initial)
      setWinner(null)
      setIsNext(true)
      
  }
  const displayDetail =()=>{
    setToggled(!toggled)
  }
    return (<>
    <h1>Tic Tac Toe</h1>
    < ToggleInfo onclick={displayDetail} toggled={toggled}/>
    <p>{status}</p>
    <div className="btn-container" >
        {textContent.map((value, i)=>{
            return <button key={i} onClick={()=>handleClick(i)}
            style={{fontSize:'1.5rem', width:'70px' , height:'70px'}} >{value}</button>
        })}
    </div>
        <ResetBtn  onclick={handleReset}/>
    </>) 
}