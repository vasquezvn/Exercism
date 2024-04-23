

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
function cardTypeCheck(stack, card) {
    // let count = 0
    // stack.forEach((needle) => {
    //     count += needle === card ? 1 : 0
    // })
    // return count

    let counter = 0;

    stack.forEach(element => {
        if (element === card) {
            counter++;
        }
    })

    return counter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
function determineOddEvenCards(stack, type) {
    // const rest = type ? 0 : 1
    // let count = 0
    
    // for (const card of stack) {
    //     if (card % 2 === rest) {
    //     count += 1
    //     }
    // }
    // return count

    let counter = 0;

    for (let card of stack.values()) {
        if (type) {
            if (card % 2 === 0) {
                counter++;
            }
        } else {
            if (card % 2 !== 0) {
                counter++;
            }
        }
    }

    return counter;
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
