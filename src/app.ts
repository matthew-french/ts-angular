
const basic = () => {

console.log('Ahoy TypeScript too!');

const arr = [{ name: 'test', top: 'ok' }];

const test = arr.map(pizza => pizza.name.toUpperCase());

console.log(test);

// arrow functions

// default params
// return type
const multiply = (a = 1, b = 25): number => {
    return a * b;
};

console.log(multiply(10));

// object lierals
const pizza = {
    name: 'test',
    price: 15,
    getName(): string {
        return this.name;
    },
};

const toppings = ['something', 'cake', 'coke'];

const createOrder = (pizza: object, toppings: string[]): object => {
    return {
        ...pizza,
        toppings,
    };
};

console.log(createOrder(pizza, toppings));
console.log(pizza.getName());

// rest param

function sumAll(message: string, ...arr: number[]): string {
    return `${message} ${arr.reduce((prev, next) => prev + next)}`;
}

const sum: string = sumAll('age:', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);

// array spread

const newToppings = ['new'];

const allToppings = [...toppings, ...newToppings];

console.log(allToppings);

// object spread operator

const spreadOrder = Object.assign({}, pizza, { toppings });

console.log(spreadOrder);

};

basic();


