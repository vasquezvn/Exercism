


/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Determine cooking state based on value sent as parameter.
 * 
 * @param {Number} remainingTime Remaining time on the timer in minutes.
 * @returns {string} message for cooking status.
 */
function cookingStatus(remainingTime = 'You forgot to set the timer.') {
    if (typeof remainingTime === 'string') {
        return remainingTime;

    } else if (remainingTime == 0) {
        return 'Lasagna is done.';

    } else {
        return 'Not done, please wait.';
    }
}


/**
 * Calculates the total preparation time for lasagna.
 * 
 * @param {string[]} arrayLayers string of layers that will be part of lasagna
 * @param {Number} timeLayer Average preparation time per layer in minutes
 * @returns {Number} return the estimate for the total preparation time based on the number of layers.
 */
function preparationTime(arrayLayers, timeLayer = 2) {
    return arrayLayers.length * timeLayer;

}

/**
 * Determine number of times that ingredient has been included on lasagna.
 * 
 * @param {string[]} arrayLayers lasagna ingredients
 * @param {string} ingredient ingredient to count
 * @returns number of time ingredient has been added to lasagna
 */
function ingredientCounter(arrayLayers, ingredient) {
    let counterIngredient = 0;

    for (let i in arrayLayers) {
        if (arrayLayers[i] == ingredient) {
            counterIngredient++;
        }
    }

    return counterIngredient;
}

/**
 * Calculates the quantity of noodles and sauce based on number of layers.
 * 
 * @param {string[]} arrayLayers array of ingredient layers.
 * @returns {object} object includes amount of noodles and sauce.
 */
function quantities(arrayLayers) {
    return {
        noodles: 50 * ingredientCounter(arrayLayers, 'noodles'),
        sauce: 0.2 * ingredientCounter(arrayLayers, 'sauce')
    }
}


/**
 * Update my ingredint list adding last ingredient from my friend list on my list.
 * 
 * @param {string[]} friendsList my friend list ingredients
 * @param {string[]} myList my ingredient list
 */
function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);

    return;

}

/**
 * Rescale amount of ingredients on lasagna based on required portions.
 * 
 * @param {string[]} recipe original recipe for 2 persons
 * @param {Number} portions number of total portions
 * @returns recipe with ingredients updated based on required portions
 */
function scaleRecipe(recipe, portions) {
    const recipeUpdated = {};

    for ( const key in recipe) {
        recipeUpdated[key] = (recipe[key] / 2) * portions
    }

    return recipeUpdated;
}

const recipe2 = {
    'sauce': 0.6,
    'noodles': 300,
    'carrots': 1,
    'mozzarella': 0.5,
    'ricotta': 50,
    'béchamel': 0.1,
    'tofu': 100,
  };

console.log(scaleRecipe(recipe2, 3));

console.log(recipe2);
