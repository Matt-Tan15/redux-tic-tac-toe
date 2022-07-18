import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameClick, sendWinner, restartGame } from "../actions/action";
import { useEffect } from "react";

const TicTacToe = () : ReactElement => {
  const dispatch = useDispatch();
  const player = useSelector((state : {player : string}) => state.player);
  const board = useSelector((state : {board: string[]}) => state.board);
  const winner = useSelector((state : {winner : string | null}) => state.winner);

  const combos : number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];

  function Cell(props : {num: number}) : ReactElement {
    return (
      <td onClick={() => {
        if (board[props.num] || winner) return;
        dispatch(gameClick(props.num))
      }}>{board[props.num]}</td>
    );
  };

  function checkForWinner(currBoard) : void {
    combos.forEach((pattern : number[]) => {
      if (currBoard[pattern[0]] === "" || currBoard[pattern[1]] === "" || currBoard[pattern[2]] === "") {

      } else if (currBoard[pattern[0]] === currBoard[pattern[1]] && currBoard[pattern[1]] === currBoard[pattern[2]]) {
        dispatch(sendWinner(currBoard[pattern[0]]));
      } 
      else if (!currBoard.includes('') && !winner) {
        dispatch(sendWinner('Tie'));
      }
    })
  }

  useEffect(() => {
    checkForWinner(board);
  }, [board]);

  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
      <h5>Turn: Player {player}</h5>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner === "Tie" && (
        <>
          <h5>{winner}!!</h5>
          <button onClick={() => dispatch(restartGame())}>Play Again</button>
        </>
      )}
      {winner !== "Tie" && winner && (
        <>
          <h5>Winner: Player {winner}</h5>
          <button onClick={() => dispatch(restartGame())}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;