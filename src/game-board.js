const bounds = require('./bounds.js');
const self = require('./self.js');
const hazards = require('./hazards');
const food = require('./food')

function safeMoves(head, body, board) {
    const withinBounds = bounds.safeMoves(head, board);
    const notSelf = self.safeMoves(head, body);
    const noHazards = hazards.safeMoves(head, board);

    // console.log("game-board-safe", withinBounds, notSelf, noHazards);

    let possibleMoves = [...new Set(withinBounds.filter(element => notSelf.includes(element)))];
    possibleMoves = [...new Set(noHazards.filter(element => possibleMoves.includes(element)))];

    // prefer food
    if(board.food && board.food.length ) { //&& board.you && board.you.health <= 50
        const pickups = food.safeMoves(head, board);

        if (pickups.length > 0) {
            // console.error("pickups", pickups, board, possibleMoves);
            let foodMoves = [...new Set(pickups.filter(element => possibleMoves.includes(element)))];
            if (foodMoves.length > 0)
            {
                possibleMoves = [...new Set(foodMoves)];
            }
            // console.error("possibleMoves", possibleMoves);
        }

        // for (let x = 0; x < pickups.length; x++) {
        //     if(possibleMoves.includes(pickups[x])) {
        //         return [pickups[x]];
        //     }
        // }
    }

    return possibleMoves;
}

module.exports = {
    safeMoves
};