/**
 * Finds safe moves within bounds of the game board based on snake's current location.
 *
 * Note the coordinates are based on the top right cartesian block, so
 * x: 0 ---------------> x: 10
 * y: 10
 *  |
 *  |
 *  |
 *  |
 * y: 0
 *
 * @param head
 * @param bounds
 * @returns {*["up", "down", "left", "right"]}
 */
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
        possibleMoves.push('up');
    }
    else if(head.y >= bounds.height-1) {
        possibleMoves.push('down');
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