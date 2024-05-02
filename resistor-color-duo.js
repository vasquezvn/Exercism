
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const decodedValue = (arrayColor) => {
    // return COLORS.indexOf(colors[0])*10 + COLORS.indexOf(colors[1]);
    let colorResistance = '';

    for (let i = 0; i < 2; i++) {
        
        colorResistance += COLORS.indexOf(arrayColor[i]).toString();
    }

    return parseInt(colorResistance);
};

console.log(decodedValue(['brown', 'black', 'blue', 'blue']));
