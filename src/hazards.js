function safeMoves(head, board) {
    let possibleMoves = [];
    let availableMoves = ["up", "down", "left", "right"];
    let tryNext = [
        {"x": head.x, "y": head.y + 1}, // up
        {"x": head.x, "y": head.y - 1}, // down
        {"x": head.x - 1, "y": head.y}, // left
        {"x": head.x + 1, "y": head.y}, // right
    ];
    if(!board.snakes) {
        console.error("SNAKES is UNDEFINED!!!", board);
    }

    let hazards = board.snakes.flatMap(parts => parts.body);
    // console.log("hazards", hazards);

    for (let dir=0; dir<4; dir++) {
        let potentialMove = tryNext[dir];
        if(!hazards.some(snakePart => {
            return snakePart.x === potentialMove.x && snakePart.y === potentialMove.y;
        })) {
            possibleMoves.push(availableMoves[dir]);
        }
    }

    return [...new Set(possibleMoves)];
}

module.exports = {
    safeMoves
};