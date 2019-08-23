const cost: number = 10;

function calculatePrice(cost: number, toppings: number = 10): number {
    return cost * toppings;
}

const stringName: string = 'hello';

function printName(name: string): string {
    return name.toUpperCase();
}

const isTrue: boolean = true;

function flipBool(bool: boolean): boolean {
    return !bool;
}

console.log(calculatePrice(cost));
console.log(printName(stringName));
console.log(flipBool(isTrue));

if (flipBool(isTrue)) {
    console.log('winning');
} else {
    console.log('losing');
}

// any type

let coupon: any;

coupon = 25;

coupon = '25';

coupon = true;

// implicit vs explicit types

let implicitCoupon = 'pizza25'; // inferring the type
let explicitCoupon: string;
explicitCoupon = 'pixxa25';

// void type
// used for functions

let selectedToppings: string = 'cheese';

// impure function
// void no returning a value from function
function selectTopping(topping: string): void {
    selectedToppings = topping;
}

selectTopping('bacon');

console.log(selectedToppings);


// never type
function orderError(error: string): never {
    throw new Error(error);
    // never going to return a value
    // no more code
}

//orderError('Something went wrong');

// null, undefined, Strict Null


let nullCoupon: string | null = 'pizza';

function removeCoupon(): void {
    nullCoupon = null;
}

removeCoupon();

console.log(nullCoupon);

// union types and literal types

let pizzaSize: number = 1;

function selectSize(size: 1 | 2 | 3): void {
    pizzaSize = size;
}

selectSize(2);

console.log(pizzaSize);


// function types;

let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => x * y;

const total = sumOrder(25, 2);

console.log(total);

// functions and optional arguments ?

const newTotal = sumOrder(25);

// Typed functions and default


// object types

let car: { name: string, price: number, getName(): string } = {
    name: 'bacon',
    price: 20,
    getName() {
        return car.name;
    }
}

console.log(car);


// array types and generics

let sizes: string[];

sizes = ['small', 'medium', "large"];

// genric type

let carColor: Array<string>;

carColor = ['red', 'blue', 'green'];

// Tuple Types for arrays
// different types with an array
let map: [string, number, boolean];
map = ['map1', 10, true];


// Type Aliases
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;
let houseSize: Size = 'small';
const selectHouseSize: Callback = (x) => {
    houseSize = x;
};
selectHouseSize('medium');

// Type Assertion
type House = { name: string, toppings: number};

const house: House = { name: 'Blazing Inferno', toppings: 5};

const jsonHouse = JSON.stringify(house);

function getNameFromJson(obj: string): House {
    return JSON.parse(obj);
}

console.log(getNameFromJson(jsonHouse));










