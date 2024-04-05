

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
function needsLicense(kind) {
    return kind == "car" || kind == "truck"

  }
  
  /**
   * Helps choosing between two options by recommending the one that
   * comes first in dictionary order.
   *
   * @param {string} option1
   * @param {string} option2
   * @returns {string} a sentence of advice which option to choose
   */
  function chooseVehicle(option1, option2) {
    if (option1 < option2)
    {
        return option1 + " is clearly the better choice."
    }

    return option2 + " is clearly the better choice."
  }
  
  /**
   * Calculates an estimate for the price of a used vehicle in the dealership
   * based on the original price and the age of the vehicle.
   *
   * @param {number} originalPrice
   * @param {number} age
   * @returns {number} expected resell price in the dealership
   */
  function calculateResellPrice(originalPrice, age) {
    let reSellPrice = 0;

    if (age < 3){
        reSellPrice = originalPrice * 0.8;
    }
    else if (age >= 3 && age <= 10) {
        reSellPrice = originalPrice * 0.7;
    } else {
        reSellPrice = originalPrice * 0.5;
    }

    return reSellPrice;
  }

console.log(calculateResellPrice(1000, 1))
  