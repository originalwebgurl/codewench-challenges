function safeMoves(head, board) {
    let possibleMoves = [];
    let availableMoves = ["up", "down", "left", "right"];

    if(!board.food) {
        console.error("Food is UNDEFINED!!!", board);
        return [];
    }

    for(const pickup in board.food) {
        if(pickup.x < head.x) {
            possibleMoves.push(availableMoves[2]);
        }
        else if(pickup.x > head.x) {
            possibleMoves.push(availableMoves[3]);
        }

        if(pickup.y < head.y) {
            possibleMoves.push(availableMoves[0]);
        }
        else if(pickup.y > head.y) {
            possibleMoves.push(availableMoves[1]);
        }
    }

    return [...new Set(possibleMoves)];
}

module.exports = {
    safeMoves
};