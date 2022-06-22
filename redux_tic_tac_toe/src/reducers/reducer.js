const initialState = {
    player: 'X',
    board: Array(9).fill(''),
    winner: false
};

export const ticTacToeReducer = (state = initialState, action) => {
    if (action.type === "CLICK") {
        if (state.board[action.payload] === '') {
            console.log(action)
            return {
                ...state,
                board: state.player === 'X' ? state.board[action.payload] = 'X' : state.board[action.payload] = 'O',
                player: state.player === 'X' ? state.player = 'O' : state.player = 'X'
            }
        } else return state;
    } else if (action.type === "RESTART") {

    }

    return state;
}