const bounds = require('./bounds.js');
const self = require('./self.js');
const hazards = require('./hazards');

function safeMoves(head, body, board) {
    const withinBounds = bounds.safeMoves(head, board);
    const notSelf = self.safeMoves(head, body);
    const noHazards = hazards.safeMoves(head, board);

    // console.log("game-board-safe", withinBounds, notSelf, noHazards);

    let possibleMoves = [...new Set(withinBounds.filter(element => notSelf.includes(element)))];
    // console.log("possibleMoves", possibleMoves);

    return [...new Set(noHazards.filter(element => possibleMoves.includes(element)))];
}

module.exports = {
    safeMoves
};