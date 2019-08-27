// interfaces
// a special type that allows you to define the shape structure of a variable/object


const interfaces = () => {
    // extending an interface
    interface Sizes {
        sizes: string[];
    }

    interface Pizza extends Sizes{
        name: string;
        toppings?: number;
        // ? mark in interface for optional variables
        getAvailableSizes(): string[];
        // allow an index signiture to be added
        [key: number]: string,
    }

    // when define a function type, interface is different...
    type getAvailableSizes = () => string[];

    let pizza: Pizza;

    function createPizza(name: string, sizes: string[]): Pizza {
        return {
            name,
            sizes,
            getAvailableSizes() {
                return this.sizes;
            },
        };
    }

    pizza = createPizza('peper', ['small', 'medium']);

    pizza[1] = 'xyz';

    pizza.toppings = 1;

    console.log(pizza);
}

interfaces();