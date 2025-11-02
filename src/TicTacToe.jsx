import { useRef } from "react"

export const TicTacToe =()=>{

    const ref = useRef()
    return (<>
    <h1>Tic Tac Toe</h1>
    <p>Next Player<span ref={ref}></span></p>
    <div className="btn-container">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
    </div>
    <button>Reset</button>
    </>)
}