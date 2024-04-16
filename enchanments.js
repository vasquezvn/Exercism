


/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
function getFirstCard(deck) {
    const [first, ...others] = deck;

    return first;
}

/**
   * Get the second card in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card} the second card in the deck
   */
function getSecondCard(deck) {
    const [first, second, ...others] = deck;

    return second;
}

/**
   * Switch the position of the first two cards in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck with reordered cards
   */
function swapTopTwoCards(deck) {
    const [first, second, ...others] = deck;

    return [second, first, ...others];
}

/**
   * Put the top card of the given deck into a separate discard pile
   *
   * @param {Card[]} deck
   *
   * @returns {[Card, Card[]]} the top card of the given
   * deck and a new deck containing all the other cards
   */
function discardTopCard(deck) {
    const [first, ...others] = deck;

    return [first, others];
}

  /** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
   * Insert face cards into the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck where the second,
   * third, and fourth cards are the face cards
   */
function insertFaceCards(deck) {
    const [first, ...others] = deck;

    return [first, ...FACE_CARDS, ...others];
}


console.log(insertFaceCards([5, 4, 7, 10]));
