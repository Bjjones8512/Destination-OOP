const Airport = require('./Airport');

class Plane extends Airport {
    #passengers; 

    constructor(name, airportCode) {
        super(name, airportCode);
        this.name = name;
        this.airportCode = airportCode;
        this.#passengers = [];
    }

    addPassenger(person) {
        this.#passengers.push(person);
    }

    getPassengers() {
        return this.#passengers;
    }
}

module.exports = Plane;
