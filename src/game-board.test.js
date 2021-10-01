// test for snake colliding with itself
const gameBoard = require("./game-board.js");

const board = {
    "height": 11,
    "width": 11,
    "snakes": [],
    "food": [
      {"x": 10, "y": 10}
    ]
};

test("When at left edge snake doesn't try to move into itself or out of bounds", () => {
    const snakeHead = {
        x: 0,
        y: 1
    };
    const snakeBody = [
        {"x": 0, "y": 1},
        {"x": 1, "y": 1}
    ];

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

    const expectedMoves = ["right", "up"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});


// test for snake colliding with other snake/s or hazards
test("When Eve, Kim, Latifah and Missy are in da house snake avoids them", () => {
    const snakeHead = {
        x: 5,
        y: 5
    };
    const snakeBody = [
        {"x": 5, "y": 5}
    ];
    const board = { "height": 11, "width": 11, "snakes": []};
    const kim = {
        "body": [
            {"x": 1, "y": 9},
            {"x": 1, "y": 8},
            {"x": 1, "y": 7},
            {"x": 1, "y": 6},
            {"x": 2, "y": 6},
            {"x": 3, "y": 6},
            {"x": 4, "y": 6},
            {"x": 5, "y": 6},
            {"x": 5, "y": 7},
            {"x": 5, "y": 8},
            {"x": 5, "y": 9},
            {"x": 4, "y": 9},
            {"x": 3, "y": 9},
            {"x": 2, "y": 9},
        ],
        "head": {"x": 1, "y": 9},
        "length": 14
    };
    const latifah = {
        "body": [
            {"x": 9, "y": 3},
            {"x": 9, "y": 4},
            {"x": 8, "y": 4},
            {"x": 7, "y": 4},
            {"x": 6, "y": 4},
            {"x": 5, "y": 4},
            {"x": 5, "y": 3},
            {"x": 5, "y": 2},
            {"x": 5, "y": 1},
            {"x": 6, "y": 1},
            {"x": 7, "y": 1},
            {"x": 8, "y": 1},
            {"x": 9, "y": 1},
            {"x": 9, "y": 2},
        ],
        "head": {"x": 9, "y": 3},
        "length": 14
    };
    board.snakes.push(kim);
    board.snakes.push(latifah);

    const expectedMoves = ["left", "right"];

    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["up"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(gameBoard.safeMoves(snakeHead, snakeBody, board)).toEqual(expect.arrayContaining(expectedMoves));
});