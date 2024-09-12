const Airport = require('./Airport');

class Plane extends Airport {
    #passengers;  // Private field

    constructor(company, origin, destination) {
        super(origin, origin.airportCode);
        this.company = company;
        this.destination = destination;
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
