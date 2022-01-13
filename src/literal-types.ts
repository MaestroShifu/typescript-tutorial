type CardinalDirecion = 'North' | 'East' | 'South' | 'West';

let direction: CardinalDirecion;

direction = 'North';
direction = 'South';
// direction = 'n0r7h'; [Error]

const move = (distanceMeters: number, direction: CardinalDirecion) => {
    console.log(`Moving ${distanceMeters} meters towards ${direction}`);
}

move(1, 'North');