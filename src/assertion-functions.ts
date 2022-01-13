type IPerson = {
    name: string,
    dateOfBirth?: Date
}

const loadPerson = (): IPerson => {
    return {
        name: 'Daniel',
        dateOfBirth: new Date('19-08-1997')
    }
}

function assert(condition: unknown, message: string): asserts condition {
    if(!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
    if(value instanceof Date) return;
    else throw new Error("Value es not a date");
}

const myPerson = loadPerson();

assert(myPerson != null, '');
console.log('Name:', myPerson.name);

assertDate(myPerson.dateOfBirth);
console.log('Date Of Birth: ', myPerson.dateOfBirth.toISOString());
