const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person');

describe('Plane Class', () => {
    
    //Create an instance of the Plane class
    test('should create an instance of Plane', () => {
        const pl1 = new Plane('Delta', 'LAX');
        expect(pl1).toBeInstanceOf(Plane);
    });

    //Check that company and destination are correctly assigned
    test('should assign company and destination correctly', () => {
        const pl1 = new Plane('Delta', 'LAX');
        expect(pl1.company).toBe('Delta');
        expect(pl1.destination).toBe('LAX');
    });

    //intialize empty array with getPassenger
    test('Should initialize emphty array', () => {
        const pl1 = new Plane ('Delta', "Company", LAX, passengers = [])
        expect(pl1.getPassengers()).toEqual([])
    })

    //Add a passenger and verify the passenger is added
    test('should add a passenger to the passengers array', () => {
        const pl1 = new Plane('Delta', 'LAX');
        const p1 = new Person('John Doe', 'LAX');
        pl1.addPassenger(p1);
        expect(pl1.passengers.length).toBe(1);
        expect(pl1.passengers[0]).toBe(p1);
    });
});