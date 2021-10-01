function safeMoves(head, board) {
    let possibleMoves = [];

    if(!board.food) {
        console.error("Food is UNDEFINED!!!", board);
        return [];
    }

    let temp = [];
    // for(const pickup in board.food) {
    for(let y = 0; y<board.food.length; y++) {
        const pickup = board.food[y];

        if(pickup.x < head.x) {
            temp.push({dir: "left", dist: head.x - pickup.x});
        }
        else if(pickup.x > head.x) {
            temp.push({dir: "right", dist: pickup.x - head.x});
        }

        if(pickup.y < head.y) {
            temp.push({dir: "down", dist: head.y - pickup.y});
        }
        else if(pickup.y > head.y) {
            temp.push({dir: "up", dist: pickup.y - head.y});
        }
    }

    // sort by distance
    if(temp.length > 0)
    {
        temp.sort((a, b) => {
            return a.dist - b.dist;
        });
    }

    possibleMoves = temp.map(move => move.dir);

    return [...new Set(possibleMoves)];
}

module.exports = {
    safeMoves
};