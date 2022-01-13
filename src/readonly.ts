type Pointer = {
    readonly x: number;
    readonly y: number;
};

const pointer: Pointer = {
    x: 0,
    y: 0
};

console.log(`(${pointer.x}, ${pointer.y})`);

/* 
Asignacion por variable [Error]

pointer = { x: 1, y: 1 }; */

/*
Asignacion por propiedad [Error]

pointer.x = 1;
pointer.y = 1; 
*/