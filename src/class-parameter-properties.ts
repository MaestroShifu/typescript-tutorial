class Person {
    constructor(
        public name: string,
        public age: number
    ) {}
}

const adam = new Person('Adam', 19);
console.log(adam.name, adam.age);