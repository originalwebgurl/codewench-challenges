const bounds = require('./bounds.js');
const self = require('./self.js');

function safeMoves(head, body, board) {
    const withinBounds = bounds.safeMoves(head, board);
    const notSelf = self.safeMoves(head, body);

    return [...new Set(withinBounds.filter(element => notSelf.includes(element)))];
}

module.exports = {
    safeMoves
};