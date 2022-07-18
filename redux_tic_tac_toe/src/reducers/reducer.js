"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticTacToeReducer = void 0;
const initialState = {
    player: 'X',
    board: Array(9).fill(''),
    winner: null
};
const ticTacToeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK':
            const copy = [...state.board];
            copy[action.payload] = state.player;
            return Object.assign(Object.assign({}, state), { board: copy, player: state.player === 'X' ? 'O' : 'X' });
        case 'CHECK':
            return Object.assign(Object.assign({}, state), { winner: action.payload });
        case 'RESTART':
            return initialState;
        default:
            return state;
    }
};
exports.ticTacToeReducer = ticTacToeReducer;
