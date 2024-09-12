const Bag = require('../../classes/Bag')

test("Can create an instance of the Bag class", () => {
  const bag = new Bag(5, 3);
  expect(bag).toBeInstanceOf(Bag);
});

test("Weight has been assigned correctly", () => {
  const bag = new Bag(5, 3);
  expect(bag.weight).toBe(5);
});

test("Id has been assigned correctly", () => {
  const bag = new Bag(5, 3);
  expect(bag.id).toBe(3);
});

test("Owner initialized with a value of null", () =>{
  const bag = new Bag(5, 3);
  expect(bag.owner).toBe(null);
})

test("Can assign person to bag", () => {
  const person = new Person("Kamala", "NYC", 5);
  const bag = new Bag(25, 3);

})