const hazards = require("./hazards.js");

const boardData = { "height": 11, "width": 11, "snakes": []};

const leftSnake = {
    "body": [
        {"x": 2, "y": 3},
        {"x": 2, "y": 4},
        {"x": 2, "y": 5}
    ],
    "head": {"x": 2, "y": 3},
    "length": 3
};
const rightSnake = {
    "body": [
        {"x": 4, "y": 3},
        {"x": 4, "y": 4},
        {"x": 4, "y": 5}
    ],
    "head": {"x": 4, "y": 3},
    "length": 3
};
const topSnake = {
    "body": [
        {"x": 4, "y": 6},
        {"x": 5, "y": 6},
        {"x": 6, "y": 6}
    ],
    "head": {"x": 4, "y": 6},
    "length": 3
};
const bottomSnake = {
    "body": [
        {"x": 4, "y": 4},
        {"x": 5, "y": 4},
        {"x": 6, "y": 4}
    ],
    "head": {"x": 4, "y": 4},
    "length": 3
};

test("When a hazard is to the left snake avoids it", () => {
    const snakeHead = {
        x: 3,
        y: 4
    };
    const snakeBody = [
        {"x": 3, "y": 4},
        {"x": 3, "y": 5},
        {"x": 3, "y": 5}
    ];

    const board = { "height": 11, "width": 11, "snakes": []};
    board.snakes.push(leftSnake);

    const expectedMoves = ["up", "down", "right"];

    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.not.arrayContaining(["left"]));
    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When a hazard is to the right snake avoids it", () => {
    const snakeHead = {
        x: 3,
        y: 4
    };
    const snakeBody = [
        {"x": 3, "y": 4},
        {"x": 3, "y": 5},
        {"x": 3, "y": 6}
    ];

    const board = { "height": 11, "width": 11, "snakes": []};
    board.snakes.push(rightSnake);

    const expectedMoves = ["up", "down", "left"];

    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.not.arrayContaining(["right"]));
    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When a hazard is above snake avoids it", () => {
    const snakeHead = {
        x: 5,
        y: 5
    };
    const snakeBody = [
        {"x": 5, "y": 5},
        {"x": 4, "y": 5},
        {"x": 3, "y": 5}
    ];

    const board = { "height": 11, "width": 11, "snakes": []};
    board.snakes.push(topSnake);

    const expectedMoves = ["down", "left", "right"];

    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.not.arrayContaining(["up"]));
    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When a hazard is below snake avoids it", () => {
    const snakeHead = {
        x: 5,
        y: 5
    };
    const snakeBody = [
        {"x": 5, "y": 5},
        {"x": 4, "y": 5},
        {"x": 3, "y": 5}
    ];

    const board = { "height": 11, "width": 11, "snakes": []};
    board.snakes.push(bottomSnake);

    const expectedMoves = ["up", "left", "right"];

    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.not.arrayContaining(["down"]));
    expect(hazards.safeMoves(snakeHead, board)).toEqual(expect.arrayContaining(expectedMoves));
});