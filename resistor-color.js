
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const colorCode = (code) => {
    return COLORS.indexOf(code);
};

const colorCode2 = (arrayColor) => {
    let colorResistance = 0;

    for (let i = 0; i < arrayColor.length; i++) {
        
        colorResistance += 10**i * COLORS.indexOf(arrayColor[i]);
    }

    const arrayColorResistance = colorResistance.toString().split("").reverse();

    return parseInt(arrayColorResistance.join(""));
};



console.log(colorCode(["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]));
