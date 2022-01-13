type DomesticAnimal = {
    name: string;
    voice(): string
}

const log = (animal: DomesticAnimal) => {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cat implements DomesticAnimal {
    constructor(public name: string) {}
    voice(): string {
        return 'meow';
    }
}

class Dog implements DomesticAnimal {
    constructor(public name: string) {}
    voice(): string {
        return 'woof';
    }
}

log(new Cat('Salem'));
log(new Dog('Lassie'));