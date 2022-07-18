"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartGame = exports.sendWinner = exports.gameClick = void 0;
const gameClick = (pos) => {
    return {
        type: "CLICK",
        payload: pos
    };
};
exports.gameClick = gameClick;
const sendWinner = (player) => {
    return {
        type: "CHECK",
        payload: player
    };
};
exports.sendWinner = sendWinner;
const restartGame = () => {
    return {
        type: "RESTART"
    };
};
exports.restartGame = restartGame;
