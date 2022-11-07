import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

let length = 2;
let width = 2;
let rectanglePerimeter = 8;
let rectangleArea = 4;

test('should output rectangle perimeter', ()=>{
    const outputPerimeter = getRectanglePerimeter(length, width);
    expect(outputPerimeter).toBe(rectanglePerimeter);
})

test('should output rectangle area', ()=>{
    const outputPerimeter = getRectangleArea(length, width);
    expect(outputPerimeter).toBe(rectangleArea);
})

test('should output rectangle info', () => {
    console.log = jest.fn();
    getRectangleInfo(length, width);
    expect(console.log).toHaveBeenCalledWith(`The perimeter of a rectangle is ${rectanglePerimeter} and the area is ${rectangleArea}`);
});

