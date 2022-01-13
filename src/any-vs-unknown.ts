let exampleAny: any;
let exampleUnknown: unknown;

// Any 
exampleAny = 123;
exampleAny = 'Hola';

// Unknown
exampleUnknown = 123;
exampleUnknown = 'Hola';

// Para tener acceso a los atributos 

// Any 
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// Unknown
if(typeof exampleUnknown == 'string') {
    exampleUnknown.trim()
}

if(typeof exampleUnknown == 'boolean') {
    let unknownSetBoolean: boolean = exampleUnknown; 
}