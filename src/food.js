function safeMoves(head, board) {
    let possibleMoves = [];
    let availableMoves = ["up", "down", "left", "right"];

    if(!board.food) {
        console.error("Food is UNDEFINED!!!", board);
        return [];
    }

    let temp = [];
    // for(const pickup in board.food) {
    for(let y = 0; y<board.food.length; y++) {
        const pickup = board.food[y];

        //console.warn("pickup", pickup, head, board);
        if(pickup.x < head.x) {
            temp.push({dir: availableMoves[2], dist: head.x - pickup.x});
        }
        else if(pickup.x > head.x) {
            temp.push({dir: availableMoves[3], dist: pickup.x - head.x});
        }

        if(pickup.y < head.y) {
            temp.push({dir: availableMoves[0], dist: head.y - pickup.y});
            // possibleMoves.push(availableMoves[0]);
        }
        else if(pickup.y > head.y) {
            temp.push({dir: availableMoves[1], dist: pickup.y - head.y});
            // possibleMoves.push(availableMoves[1]);
        }
    }

    // sort by distance
    // sort((firstEl, secondEl) => { ... } )
    if(temp.length > 0)
    {
        //console.log("BEFORE SORT", temp);

        temp.sort((a, b) => {
            return a.dist - b.dist;
        });

        //console.log("AFTER SORT", temp);
    }

    possibleMoves = temp.map(move => move.dir);

    return [...new Set(possibleMoves)];
}

module.exports = {
    safeMoves
};