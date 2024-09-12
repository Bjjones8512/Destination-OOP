const Airport = require('../../classes/Airport')
const { describe, it, test, expect } = require("@jest/globals");

describe('Has content', ()=>{
    const a1 = new Airport("Bob", planes=[], 321)
    it('Has a name', () =>{
        expect(a1.name).toBe("Bob")
    })
    it('Has a airportCode', () =>{
        expect(a1.airportCode).toBe(321)
    })
    it('Has an array', () =>{
        expect(a1.planes).toEqual([])
    })
    it('Has push', () =>{
        expect(a1.addPlane()).toBe()
    })
})