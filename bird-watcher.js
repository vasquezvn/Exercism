

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
    let birdCounter = 0;

    for (let i = 0; i < birdsPerDay.length; i++) {
      birdCounter += birdsPerDay[i]
    }

    return birdCounter

  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  function birdsInWeek(birdsPerDay, week) {
    let lastWeekDay = (week * 7)
    let birdCounter = 0
    for (let i = lastWeekDay - 7 ; i < lastWeekDay; i++ ) {
      birdCounter += birdsPerDay[i]
    }

    return birdCounter

  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
      if (i % 2 == 0) {
        birdsPerDay[i] += 1
      }
    }

    return birdsPerDay

  }

  
  console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]))
