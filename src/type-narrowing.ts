type Square = {
    size: number;
}

type Rectangle = {
    width: number;
    height: number
}

type Shape = Square | Rectangle;

const area = (shape: Shape) => {
    if('size' in shape) {
        return shape.size * shape.size;
    }
    if('width' in shape) {
        return shape.height * shape.width;
    }
}

area({ size: 10 });
area({ width: 10, height: 30 })