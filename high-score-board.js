

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
function createScoreBoard() {
    const obj = { 'The Best Ever' : 1000000 }

    return obj;
}
  
/**
* Adds a player to a score board.
*
* @param {Record<string, number>} scoreBoard
* @param {string} player
* @param {number} score
* @returns {Record<string, number>} updated score board
*/
function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;

    return scoreBoard;
}
  
/**
* Removes a player from a score board.
*
* @param {Record<string, number>} scoreBoard
* @param {string} player
* @returns {Record<string, number>} updated score board
*/
function removePlayer(scoreBoard, player) {
    if (scoreBoard.hasOwnProperty(player)) {
        delete scoreBoard[player];
    }

    return scoreBoard;
}
  
/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
function updateScore(scoreBoard, player, points) {
    if (scoreBoard.hasOwnProperty(player)) {
        scoreBoard[player] += points;
    }

    return scoreBoard;
}
  
/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
function applyMondayBonus(scoreBoard) {
   for (let key in scoreBoard) {
    scoreBoard[key] += 100;
   }

   return scoreBoard;
}


function normalize(score) {
    return 2 * score + 10;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
*/
function normalizeScore(params) {
    //return normalize(params.score, params.normalizeFunction);
    return params.normalizeFunction(params.score)
}

const params = { score: 400, normalizeFunction: normalize };

console.log(normalizeScore(params));
