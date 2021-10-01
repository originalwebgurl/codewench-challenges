// test for snake colliding with itself
const self = require("./self.js");

test("When at left edge snake doesn't try to move into itself", () => {
    const snakeHead = {
        x: 0,
        y: 1
    };
    const snakeBody = [
        {"x": 0, "y": 1},
        {"x": 1, "y": 1}
    ];

    const expectedMoves = ["up", "down"];

    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.not.arrayContaining(["right"]));
    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at right edge snake doesn't try to move into itself", () => {
    const snakeHead = {
        x: 10,
        y: 1
    };
    const snakeBody = [
        {"x": 10, "y": 1},
        {"x": 9, "y": 1}
    ];

    const expectedMoves = ["up", "down"];

    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.not.arrayContaining(["left"]));
    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at top edge snake doesn't try to move into itself", () => {
    const snakeHead = {
        x: 5,
        y: 10
    };
    const snakeBody = [
        {"x": 5, "y": 10},
        {"x": 5, "y": 9}
    ];

    const expectedMoves = ["left", "right"];

    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.not.arrayContaining(["down"]));
    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.arrayContaining(expectedMoves));
});

test("When at bottom edge snake doesn't try to move into itself", () => {
    const snakeHead = {
        x: 5,
        y: 0
    };
    const snakeBody = [
        {"x": 5, "y": 0},
        {"x": 5, "y": 1}
    ];

    const expectedMoves = ["left", "right"];

    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.not.arrayContaining(["up"]));
    expect(self.safeMoves(snakeHead, snakeBody)).toEqual(expect.arrayContaining(expectedMoves));
});
