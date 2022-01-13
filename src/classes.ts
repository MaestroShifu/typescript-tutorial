class Animal {
    // private name: string;
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}

let cat = new Animal('CAT');
cat.move(10);
// cat.name = 'DOG' Error!!

class Bird extends Animal {
    fly(distanceInMeters: number) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);        
    }
}