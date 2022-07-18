export const gameClick = (pos: number) => {
    return {
        type: "CLICK",
        payload: pos
    }
}

export const sendWinner = (player: string) => {
    return {
        type: "CHECK",
        payload: player
    }
}

export const restartGame = () :{ type: string } => {
    return {
        type: "RESTART"
    }
}