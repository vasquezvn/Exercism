
/**
 * Send regards.
 * 
 * @param {string} message words to teenanger.
 */
const hey = (message) => {
    message = message.trim();

    if (message.endsWith('?') && message.replace(/[^a-zA-Z]+/gi, "").length !== 0 && message.toUpperCase() === message) {
        return "Calm down, I know what I'm doing!";

    } else if (message.endsWith('?')) {
        return "Sure.";

    } else if (message.toUpperCase() === message && message.replace(/\s|\d|,/gi, "").length !== 0 ) {
        return "Whoa, chill out!";

    } else if (message.length === 0) {
        return "Fine. Be that way!";

    } else {
        return "Whatever.";
    }
};


const hey2 = (message) => {
    const messageTrim = message.trim();
    if (isQuestion(messageTrim) && isUpperCase(messageTrim)) {
        return "Calm down, I know what I'm doing!";
    } else if (isQuestion(messageTrim)) {
        return "Sure.";
    } else if (isBlank(messageTrim)) {
        return "Fine. Be that way!";
    } else if (isUpperCase(messageTrim)) {
        return "Whoa, chill out!";
    } else {
        return "Whatever.";
    }
};

const isQuestion = (message) => message.endsWith("?");
const isUpperCase = (message) => !/[a-z]/.test(message) && /[A-Z]/.test(message);
const isBlank = (message) => message === "";