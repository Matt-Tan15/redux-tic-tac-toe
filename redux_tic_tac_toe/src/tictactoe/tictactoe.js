import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameClick } from '../actions/action';

const TicTacToe = () => {
    const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const board = useSelector((state) => state.board);
  const winner = useSelector((state) => state.winner);

  function Cell(props) {
    return <td onClick={() => dispatch(gameClick(props.num))}>{board[props.num]}</td>;
  }

  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
      <h5>Turn: </h5>
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
          <button>Play Again</button>
        </>
      )}
      {winner !== "Tie" && winner && (
        <>
          <h5>Winner: Player {winner}</h5>
          <button>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
