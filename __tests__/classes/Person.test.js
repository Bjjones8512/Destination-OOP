const Person = require("../../classes/Person");

const person = new Person("Bill", "LAX", (bag = []));
describe("Person class", () => {
  test("can create an instance of Person class", () => {
    expect(person).toBeInstanceOf(Person);
  });

  test("Name to have been assigned correctly", () => {
    expect(person.name).toBe("Bill");
  });

  test("Destination to have been assigned correctly", () => {
    expect(person.destination).toBe("LAX");
  });

  test("bags initalize as an empty array", () => {
    expect(person.bags).toEqual([]);
  });

  test("addBag adds a bag to the bag array", () => {
    person.addBag(1);
    expect(person.getBags()).toEqual([bag.length]);
  });
});
