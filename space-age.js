
const planetAge = {
    earth: 31557600,
    mercury: 0.2408467,
    venus: 0.61519726, 
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

const RATIO = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
},
EARTH_YEAR = 31557600

const age = (planet, seconds) => {
    // return Number((seconds / EARTH_YEAR / RATIO[planet]).toFixed(2))
    if (planet !== 'earth'){
        return parseFloat(Number(seconds / (planetAge[planet] * planetAge['earth'])).toFixed(2));
    }

    return parseFloat(Number(seconds / (planetAge[planet])).toFixed(2));
};

console.log(age('uranus', 1210123456));
