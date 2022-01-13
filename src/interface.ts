// Las interfaces sirven para la verificacion de tipos en tiempo de compilacion y no forma parte del JS de salida.

interface IPoint2D {
    x: number;
    y: number;
}

interface IPoint3D extends IPoint2D {
    z: number;
}

export const point: IPoint3D = {
    x: 0,
    y: 0,
    z: 0
}