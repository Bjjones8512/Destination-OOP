class Airport {
    constructor(name, planes = [], airportCode){
        this.name=name
        this.planes=planes
        this.airportCode=airportCode
    }
    addPlane(plane){
        this.planes.push(plane)
    }

}


module.exports = Airport;