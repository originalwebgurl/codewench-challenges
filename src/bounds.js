function safeMoves(head, bounds) {
    let possibleMoves = [];

    // first hacky try to stay within bounds
    if(head.x <= 0) {
        possibleMoves.push('right');
    }
    else if(head.x >= bounds.width-1) {
        possibleMoves.push('left');
    }
    else {
        possibleMoves.push('left');
        possibleMoves.push('right');
    }

    if(head.y <= 0) {
        possibleMoves.push('down');
    }
    else if(head.y >= bounds.height-1) {
        possibleMoves.push('up');
    }
    else {
        possibleMoves.push('down');
        possibleMoves.push('up');
    }

    return possibleMoves;
}

module.exports = {
    safeMoves
};