

const letters = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = (text) => {
    // return new Set(str.toLowerCase().match(/[a-z]/g)).size === 26;
    const regex = /[^a-z]/g;
    let setLetters = new Set(text.toLowerCase().replaceAll(regex, ''));

    if (text.length === 0 || (setLetters.size !== letters.length)) {
        return false;
    }

    return true;
};

console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."'));
