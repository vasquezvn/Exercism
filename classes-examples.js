
function Car(color, weight) {
    this.color = color;
    this.weight = weight;
    this.engineRunning = false;

}

Car.prototype.startEngine = function () {
    this.engineRunning = true;
};

Car.prototype.addGas = function (litre) {
    //...
};


class Fly {
    constructor(color, weight) {
        this.color = color;
        this. weight = weight;
        this.engineRunning = false;
    }

    startEngine() {
        this.engineRunning = true;
    }

    addGas() {
        // ...
    }
}

class Ship {
    constructor() {
        this._milage = 0;
    }

    get milage() {
        return this._milage;
    }

    set milage(value) {
        throw new Error(`Milage cannot be manipulated, ${value} is ignored.`);
    }
}

const myShip = new Ship();
console.log(myShip.milage);
myShip.milage = 100;

const myCar = new Car('red', '2mt');
myCar.startEngine();

console.log(myCar.color);
console.log(myCar.engineRunning);

const myFly = new Fly('green', '18mt');
myFly.startEngine();

console.log(myFly.engineRunning);
