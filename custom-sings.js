

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`;

}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

function buildBirthdaySign(age) {
    return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;

}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`;

}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

function costOf(sign, currency) {
    return `Your sign costs ${(sign.length * 2) + 20}.00 ${currency}.`;

}


console.log(costOf('Happy Birthday Rob!', 'dollars'));
