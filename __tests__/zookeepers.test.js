const fs = require("fs");
const {
  filterByQuery,
  filterById,
  createNewZookeeper,
  validateZookeeper,
} = require("../lib/zookeepers");

const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");

test("creates new zookeeper", () => {
  const zookeeper = createNewZookeeper({ name: "Darlene", id: 1 }, zookeepers);

  expect(zookeeper.name).toBe("Darlene");
  expect(zookeeper.id).toBe(1);
});

test("filter by query", () => {
  const startingZookeepers = [
    { id: 2, name: "Raksha", age: 31, favoriteAnimal: "penguin" },
    {
      id: 3,
      name: "Isabella",
      age: 67,
      favoriteAnimal: "bear",
    },
  ];
  const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);

  expect(updatedZookeepers.length).toEqual(1);
});

test("find by id", () => {
  const startingZookeepers = [
    {
      id: 2,
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin",
    },
    {
      id: 3,
      name: "Isabella",
      age: 67,
      favoriteAnimal: "bear",
    },
  ];
  const result = filterById(3, startingZookeepers);

  expect(result.name).toBe("Isabella");
});

test("validates zookeeper age", () => {
  const zookeeper = {
    id: 2,
    name: "Raksha",
    age: 31,
    favoriteAnimal: "penguin",
  };

  const invalidZookeeper = {
    id: 3,
    name: "Isabella",
    age: "67",
    favoriteAnimal: "bear",
  };

  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
