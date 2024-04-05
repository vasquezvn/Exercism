

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;

  }
  

  /**
   * A useful spy captures information, which they can't do if everyone's asleep.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can spy on someone.
   */
  function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake

  }
  

  /**
   * You'll get caught by the archer if you signal while they're awake.
   *
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can send a signal to the prisoner.
   */
  function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake

  }
  

  /**
   * The final stage in the plan: freeing Annalyn's best friend.
   * 1st condition: 
   *  petDogIsPresent = true
   *  archer = false
   *  knight = true
   *  prisioner = true
   * 2nd condition:
   *  petDogIsPresent = false
   *  prisioner = true
   *  knight = false
   *  arched = false
   *  
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   * @param {boolean} petDogIsPresent
   *
   * @returns {boolean} Whether or not you can free Annalyn's friend.
   */
  function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
  ) {
    return (petDogIsPresent && !archerIsAwake) || 
    (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);

  }


console.log(canFreePrisoner(false, false, true, true))
