"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const action_1 = require("../actions/action");
const react_1 = require("react");
const TicTacToe = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const player = (0, react_redux_1.useSelector)((state) => state.player);
    const board = (0, react_redux_1.useSelector)((state) => state.board);
    const winner = (0, react_redux_1.useSelector)((state) => state.winner);
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    function Cell(props) {
        return ((0, jsx_runtime_1.jsx)("td", Object.assign({ onClick: () => {
                if (board[props.num] || winner)
                    return;
                dispatch((0, action_1.gameClick)(props.num));
            } }, { children: board[props.num] })));
    }
    ;
    function checkForWinner(currBoard) {
        combos.forEach((pattern) => {
            if (currBoard[pattern[0]] === "" || currBoard[pattern[1]] === "" || currBoard[pattern[2]] === "") {
            }
            else if (currBoard[pattern[0]] === currBoard[pattern[1]] && currBoard[pattern[1]] === currBoard[pattern[2]]) {
                dispatch((0, action_1.sendWinner)(currBoard[pattern[0]]));
            }
            else if (!currBoard.includes('') && !winner) {
                dispatch((0, action_1.sendWinner)('Tie'));
            }
        });
    }
    (0, react_1.useEffect)(() => {
        checkForWinner(board);
    }, [board]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Tic-Tac-Toe" }), (0, jsx_runtime_1.jsxs)("h5", { children: ["Turn: Player ", player] }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)(Cell, { num: 0 }), (0, jsx_runtime_1.jsx)(Cell, { num: 1 }), (0, jsx_runtime_1.jsx)(Cell, { num: 2 })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)(Cell, { num: 3 }), (0, jsx_runtime_1.jsx)(Cell, { num: 4 }), (0, jsx_runtime_1.jsx)(Cell, { num: 5 })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)(Cell, { num: 6 }), (0, jsx_runtime_1.jsx)(Cell, { num: 7 }), (0, jsx_runtime_1.jsx)(Cell, { num: 8 })] })] }) }), winner === "Tie" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("h5", { children: [winner, "!!"] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch((0, action_1.restartGame)()) }, { children: "Play Again" }))] })), winner !== "Tie" && winner && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("h5", { children: ["Winner: Player ", winner] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => dispatch((0, action_1.restartGame)()) }, { children: "Play Again" }))] }))] })));
};
exports.default = TicTacToe;
