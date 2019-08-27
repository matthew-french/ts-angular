interface SizesInterface {
    availableSizes: string[];
}

// abstract class
// an abstract class is something a class may extend from

// protected can be used in a class that extends
abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

// not available as it now an abstract class
// const sizes = new Sizes(['small', 'medium']);

// // invoke getter
// console.log(sizes.availableSizes);

// // invoke setter
// sizes.availableSizes = ['medium', 'large'];
// console.log(sizes.availableSizes);

interface CarInterface extends SizesInterface {
    readonly make: string;
    toppings: string[];
    name: string;
    updateSizes(sizes: string[]): void;
    addToppings(topping: string): void;
}

class Car extends Sizes implements CarInterface {
    public toppings: string[] = [];

    constructor(public name: string, readonly make: string, public sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public addToppings(topping: string) {
        this.toppings.push(topping);
    }
}

const bluecar = new Car('35x', 'hyundai', ['small', 'medium']);
bluecar.addToppings('22cc');

console.log(bluecar.name);
console.log(bluecar.make);
console.log(bluecar);

bluecar.name = 'test';
console.log(bluecar.name);

console.log(bluecar.availableSizes);

bluecar.updateSizes(['red']);


// create a static propertie or method
// You don't need to use the new class
class Coupon {
    static allowed = [1,2,3,4];
    static create(percent: number) {
        return `PIZZA_${percent}`;
    }
}

console.log(Coupon.allowed);
console.log(Coupon.create(35));