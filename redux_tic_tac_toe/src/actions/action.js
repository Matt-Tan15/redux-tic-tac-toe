export const gameClick = (pos) => {
    return {
        type: "CLICK",
        payload: pos
    }
}

export const sendWinner = (player) => {
    console.log(player)
    return {
        type: "CHECK",
        payload: player
    }
}

export const restartGame = () => {
    return {
        type: "RESTART"
    }
}