

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

function isValidCommand(command) {
    // return /^chatbot/i.test(command)

    let chatbotExp = /chatbot/i;
    let firstString = command.split(/[,.\s]/)[0];

    return chatbotExp.test(firstString);
}

/**
   * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
   *
   * @param {string} message
   * @returns {string} The message without the emojis encryption
   */
function removeEmoji(message) {
    // return message.replaceAll(/emoji[0-9]+/g, '')

    let regexEmoji = new RegExp(/emoji(\w+)/, "gi");
    let result = message;

    if (regexEmoji.test(message)) {
        result = message.replace(regexEmoji, "");
    }

    return result;
}

/**
   * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
   *
   * @param {string} number The expected format is: (+##) ###-###-###
   * @returns {string} the Chatbot response to the phone Validation
   */
function checkPhoneNumber(number) {
    let phoneExp = new RegExp(/^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/);

    if (phoneExp.test(number)) {
        return "Thanks! You can now download me to your phone.";
    }

    return `Oops, it seems like I can't reach out to ${number}`;
}

/**
   * Given a certain response from the user, help the chatbot get only the URL.
   *
   * @param {string} userInput
   * @returns {string[] | null} all the possible URL's that the user may have answered
   */
function getURL(userInput) {
    // return userInput.match(/\S*\.\S*/g)

    let urlRegExp = new RegExp(/[\s]/);
    const stringArray = userInput.split(urlRegExp);
    const resultArray = [];

    for(const i of stringArray.values()) {
        if (/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(i)) {
            resultArray.push(i);
        }
    }
    
    return resultArray;
}

/**
   * Greet the user using the full name data from the profile.
   *
   * @param {string} fullName 'Smith, John'
   * @returns {string} Greeting from the chatbot => "Nice to meet you, John Smith"
   */
function niceToMeetYou(fullName) {
    // const politeName = fullName.replace(/([a-z]+), ([a-z]+)/i, '$2 $1')
    // return `Nice to meet you, ${politeName}`

    const arrayName = fullName.split(/[,.\s]/);

    return "Nice to meet you, " + arrayName[2] + " " + arrayName[0];
}


console.log(niceToMeetYou("Smith, John"));