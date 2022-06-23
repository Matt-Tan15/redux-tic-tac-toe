const initialState = {
    player: 'X',
    board: Array(9).fill(''),
    winner: null
};

export const ticTacToeReducer = (state = initialState, action) => {
    if (action.type === 'CLICK') {
        if (state.player === 'X' && state.board[action.payload] === '') {
            const copy = [...state.board];
            copy[action.payload] = 'X';
            return {
                ...state,
                board: copy,
                player: 'O'
            }
        } else if (state.player === 'O' && state.board[action.payload] === ''){
            const copy = [...state.board];
            copy[action.payload] = 'O';
            return {
                ...state,
                board: copy,
                player: 'X'
            }
        }
    } else if (action.type === "CHECK") {
        console.log('won')
    }

    return state;
}