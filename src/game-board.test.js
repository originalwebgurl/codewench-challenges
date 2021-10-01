// test for snake colliding with itself
const gameBoard = require("./game-board.js");

test("When at left edge snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 0,
        y: 1
    };
    const snakeBody = [
        {"x": 0, "y": 1},
        {"x": 1, "y": 1}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["up", "down"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["right"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["left"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at right edge snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 10,
        y: 1
    };
    const snakeBody = [
        {"x": 10, "y": 1},
        {"x": 9, "y": 1}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["up", "down"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["right"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["left"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at top edge snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 5,
        y: 0
    };
    const snakeBody = [
        {"x": 5, "y": 0},
        {"x": 5, "y": 1}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["left", "right"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["up"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at top left corner snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 0,
        y: 0
    };
    const snakeBody = [
        {"x": 0, "y": 0},
        {"x": 0, "y": 1}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["right"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["up"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["left"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at bottom edge snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 5,
        y: 10
    };
    const snakeBody = [
        {"x": 5, "y": 10},
        {"x": 5, "y": 9}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["left", "right"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["up"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at bottom right corner snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 10,
        y: 10
    };
    const snakeBody = [
        {"x": 10, "y": 10},
        {"x": 10, "y": 9}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["left"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["up"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["right"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at bottom snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 3,
        y: 0
    };
    const snakeBody = [
        {"x": 3, "y": 0},
        {"x": 2, "y": 0},
        {"x": 1, "y": 0}
    ];
    const board = {
        "height": 11,
        "width": 11
    };

    const expectedMoves = ["right", "up"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});


// [
//     {
//         "X": 3,
//         "Y": 0
//     },
//     {
//         "X": 2,
//         "Y": 0
//     },
//     {
//         "X": 1,
//         "Y": 0
//     }
// ]


// test for snake colliding with other snake/s or hazards