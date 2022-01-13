type AddExample = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
    debugName?: string
};

const addExample: AddExample = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
}

addExample.debugName = 'Addition Function';

type PointCreator = {
    new(x: number, y: number): { x: number, y: number }, //  Sirve para cuando son clases
    new(x: number, y: number, z: number): { x: number, y: number, z: number },
    (x: number, y: number): { x: number, y: number },
    (x: number, y: number, z: number): { x: number, y: number, z: number },
    debugName: string
}