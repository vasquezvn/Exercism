

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
function seeingDouble(deck) {
    return deck.map(x => x * 2);

}

/**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
function threeOfEachThree(deck) {
        // return deck.reduce((result, card) => {
        //     if (card == 3) 
        //     result.push(3, 3, 3);
        //     else
        //     result.push(card);
        //     return result
        // }, []);
    const arrayWithThree = [];

    for (let x in deck) {
        arrayWithThree.push(deck[x]);

        if (deck[x] === 3) {
            arrayWithThree.push(3);
            arrayWithThree.push(3);
        }
    }

    return arrayWithThree;
}

/**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
function middleTwo(deck) {
    // const mid = deck.length / 2 - 1
    // return deck.slice(mid, mid+2);
    return deck.filter((value) => ( deck.indexOf(value) === deck.length / 2) || 
                                    deck.indexOf(value) === (deck.length / 2) - 1)
}

/**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */

function sandwichTrick(deck) {
    deck.splice((deck.length / 2) - 1, 0 , deck.pop(), deck.shift());

    return deck;
}

/**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
function twoIsSpecial(deck) {
    return deck.filter(x => x === 2);

}

/**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
function perfectlyOrdered(deck) {
    // deck.sort((a, b) => a - b);
    // return deck;
    
    const orderDeck = deck.sort((item1, item2) => {
        if (item1 < item2) {
            return -1;
        }
        else if (item1 > item2) {
            return 1;
        }
        return 0;
    })

    return orderDeck;
}

/**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
function reorder(deck) {
    return deck.reverse();
}

console.log(reorder([10, 1, 5, 3, 2]));
