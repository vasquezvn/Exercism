const twoFer = (name = 'you') => {
    return `One for ${name}, one for me.`;
};

const twoFer2 = (name = 'you') => `One for ${name}, one for me.`;

console.log(twoFer2());