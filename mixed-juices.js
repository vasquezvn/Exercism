

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
    switch (name) {
      case "Pure Strawberry Joy":
        return 0.5;

      case "Green Garden":
      case "Energizer":
        return 1.5;

      case "Tropical Island":
        return 3;
      
      case "All or Nothing":
        return 5;
        
      default:
        return 2.5;

    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   * small = 6 w
   * medium = 8 w
   * large = 10 w
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  function limesToCut(wedgesNeeded, limes) {
    let numberLimesCut = 0;

    while (wedgesNeeded > 0 && numberLimesCut < limes.length) {
      if (limes[numberLimesCut] == "small") {
        wedgesNeeded -= 6;

      } else if (limes[numberLimesCut] == "medium") {
        wedgesNeeded -= 8;

      } else {
        wedgesNeeded -= 10;
      }

      numberLimesCut++
    }

    return numberLimesCut;
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  function remainingOrders(timeLeft, orders) {

    while (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders.shift())
    }

    return orders
  }

  const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
  ];

console.log(limesToCut(80, limes)) 

  