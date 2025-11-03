import { useState } from "react"

export const TicTacToe =()=>{
    const initial = Array(9).fill(null)
    const [textContent,setTextContent] = useState(initial)
    const [isNext, setIsNext] = useState(true)
    const [winner, setWinner] = useState(null)

    
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
 
    
    const newText = textContent.slice()
  newText[index] = isNext? "X":"O";
  setTextContent(newText)

  const winning = gameWinner(newText)
   

    
    if(winning){
        setWinner(winning)
    }else if(newText.every(Boolean)){
        setWinner("Draw")
    }else{
        setIsNext(!isNext)
    }
}
let status 
   
    if(winner ==="Draw"){
       status = "It is draw";
    }else if(winner){
       status = `${winner} wins the game`;
    }else{
       status = `Next Player ${isNext ? "X": "O"} `
    }

  const handleReset =()=>{
      setTextContent(initial)
      setWinner(null)
      setIsNext(true)
      
  }
    return (<>
    <h1>Tic Tac Toe</h1>
    <p>{status}</p>
    <div className="btn-container" >
        {textContent.map((value, i)=>{
            return <button key={i} onClick={()=>handleClick(i)}
            style={{fontSize:'1.5rem', width:'70px' , height:'70px'}} >{value}</button>
        })}
    </div>
    <button onClick={handleReset}>Reset</button>
    </>)
}