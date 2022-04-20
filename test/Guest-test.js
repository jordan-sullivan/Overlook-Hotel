import { expect } from "chai";
import Guest from "../src/classes/Guest";

describe("Guest", () => {
  let customersData;

  beforeEach(() => {
    //customers dataset is an array of objects

    customersData14 = [
      {
        id: 14,
        name: "Dallas Schultz",
      },
    ];

    customersData15 = [
      {
        id: 15,
        name: "Maria Lakin",
      },
    ];

    customersData16 = [
      {
        id: 16,
        name: "Garry Mills",
      },
    ];
  });

  guest14 = new Guest(customersData14);
  guest15 = new Guest(customersData15);
  guest16 = new Guest(customersData16);
});

it("should be a function", () => {
  expect(Guest).to.be.a("function");
});

it("should be an instance of Guest", () => {
  expect(guest).to.be.an.instanceOf(Guest);
});

it("should hold a single guest", () => {
  expect(guest14.customer).to.equal(customersData14);
});

it("should have a name", () => {
  expect(guest14.customer.name).to.equal("Dallas Schultz");
  expect(guest15.customer.name).to.equal("Maria Lakin");
});

it("should have an id", () => {
  expect(guest15.customer.id).to.equal(15);
  expect(guest16.customer.id).to.equal(16);
});

// it("should have a pantry", () => {
//   expect(guest.customer.pantry).to.equal(guestsData[0].pantry);
// });

// it("should be able to split guest's name", () => {
//   expect(guest.returnGuestFirstName()).to.equal("Saige");
//   expect(guest2.returnGuestFirstName()).to.equal("Ephraim");
// });

// it("should be able to favorite a recipe", () => {
//   expect(guest.favoriteRecipes[0]).to.equal(recipeData[0]);
// });
