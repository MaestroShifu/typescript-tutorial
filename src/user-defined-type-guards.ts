type ISquare = {
    size: number;
};

type IRectangle = {
    width: number;
    height: number;
};

type IShape = ISquare | IRectangle;

const isSquare = (shape: IShape): shape is ISquare => {
    return 'size' in shape;
}

const isRectangle = (shape: IShape): shape is IRectangle => {
    return 'width' in shape;
}

const getArea = (shape: IShape) => {
    if(isSquare(shape)) {
        return shape.size * shape.size;
    }
    if(isRectangle(shape)) {
        return shape.height * shape.width
    }
    const _ensure: never = shape;
    return _ensure;
}