interface IinitialState {
    player: string,
    board: string[],
    winner: string | null
}

const initialState: IinitialState = {
    player: 'X',
    board: Array(9).fill(''),
    winner: null
};

export const ticTacToeReducer = (state : IinitialState = initialState, action : {type: string, payload : number | string}) => {
    switch (action.type) {
        case 'CLICK':
            const copy : string[] = [...state.board];
            copy[action.payload] = state.player;
            return {
                ...state,
                board: copy,
                player: state.player === 'X' ? 'O' : 'X'
            }
        case 'CHECK': 
            return {
                ...state,
                winner : action.payload
            }
        case 'RESTART':
            return initialState;
        default:
            return state;
    }
};