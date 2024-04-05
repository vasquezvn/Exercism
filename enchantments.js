/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
function getItem(cards, position) {
    return cards[position]

  }
  
  /**
   * Exchange card with replacementCard at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   * @param {number} replacementCard
   *
   * @returns {number[]} the cards with the change applied
   */
  function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard

    return cards

  }
  
  /**
   * Insert newCard at the end of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards with the newCard applied
   */
  function insertItemAtTop(cards, newCard) {
    cards.push(newCard)

    return cards

  }
  
  /**
   * Remove the card at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   *
   * @returns {number[]} the cards without the removed card
   */
  function removeItem(cards, position) {
    cards.splice(position, 1)
    //let itemDeleted = cards.splice(position, 1)
    // console.log(parseInt(itemDeleted.toString()))

    return cards

  }
  
  /**
   * Remove card from the end of the cards array
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  function removeItemFromTop(cards) {
    cards.pop()

    return cards

  }
  
  /**
   * Insert newCard at beginning of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards including the new card
   */
  function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard)

    return cards

  }
  
  /**
   * Remove card from the beginning of the cards
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  function removeItemAtBottom(cards) {
    cards.splice(0, 1)

    return cards

  }
  
  /**
   * Compare the number of cards with the given stackSize
   *
   * @param {number[]} cards
   * @param {number} stackSize
   *
   * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
   */
  function checkSizeOfStack(cards, stackSize) {
    return cards.length == stackSize

  }
  
  console.log(checkSizeOfStack([3, 2, 6, 4, 8], 5))
