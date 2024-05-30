

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getRandomInt( max ) {
    return Math.floor( Math.random() * max );
}

class Robot {

    static _namePool = new Map();

    constructor() {
        this._name = this._newName();
    }

    _randomName() {
        const letterArray = upperLetters.split("");
        const firstLetter = letterArray[getRandomInt(letterArray.length - 1)];
        const secondLetter = letterArray[getRandomInt(letterArray.length - 1)];

        return firstLetter + secondLetter  + getRandomInt(9) + getRandomInt(9) + getRandomInt(9);
    }

    _newName() {
        let name;

        do {
            name = this._randomName();
        } while ( Robot._namePool.has(name) );
        
        Robot._namePool.set(name, true);
        return name;
    }

    reset() {
        this._name = this._newName();
    }

    get name() {
        return this._name;
    }
}

Robot.releaseNames = () => { Robot._namePool = new Map(); };

let myRobot = new Robot();
console.log(myRobot.name);
