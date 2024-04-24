/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
function pizzaPrice(pizza, ...extras) {
    
    if (extras.length > 0 ) {
        switch(extras.pop()) {
            case "ExtraSauce":
                return 1 + pizzaPrice(pizza, ...extras);
                // @ts-ignore
                break;
            
            case "ExtraToppings":
                return 2 + pizzaPrice(pizza, ...extras);
                // @ts-ignore
                break;
        }
    }

    switch(pizza) {
        case "Caprese":
            return 9;
            // @ts-ignore
            break;

        case "Formaggio":
            return 10;
            // @ts-ignore
            break;
        
        case "Margherita":
            return 7;
            // @ts-ignore
            break;
    }
}

/**
   * Calculate the price of the total order, given individual orders
   *
   * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
   * for a more info about the type definitions used)
   *
   * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
   * @returns {number} the price of the total order
   */
function orderPrice(pizzaOrders) {
    // return pizzaOrders.reduce(
    //     (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    //     0
    //   );

    let totalPrice = 0;
    for (let order of pizzaOrders) {
        totalPrice += pizzaPrice(order.pizza, ...order.extras);
    }

    return totalPrice;
}

// @ts-ignore
const margherita = new PizzaOrder('Margherita');
// @ts-ignore
const caprese = new PizzaOrder('Caprese', 'ExtraToppings');

console.log(orderPrice([margherita, caprese]));
