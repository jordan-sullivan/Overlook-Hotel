import { expect } from "chai";
import Guest from "../src/classes/Guest";

describe("Guest", () => {
  let customersData,
    // customersData15,
    // customersData16,
    guest14,
    guest15,
    guest16,
    bookingsData,
    roomsData;

  beforeEach(() => {
    //customers dataset is an array of objects
    customersData = [
      {
        id: 14,
        name: "Dallas Schultz",
      },
      {
        id: 15,
        name: "Maria Lakin",
      },
      //he'll have no booking data, sad path tester
      {
        id: 16,
        name: "Garry Mills",
      },
    ];

    bookingsData = [
      //bookings data set is an array of objects
      {
        id: "5fwrgu4i7k55hl6tn",
        userID: 15,
        date: "2022/01/17",
        roomNumber: 5,
      },
      {
        id: "5fwrgu4i7k55hl6u7",
        userID: 14,
        date: "2022/01/16",
        roomNumber: 17,
      },
      {
        id: "5fwrgu4i7k55hl6w1",
        userID: 15,
        date: "2022/02/19",
        roomNumber: 8,
      },
      {
        id: "5fwrgu4i7k55hl6w2",
        userID: 14,
        date: "2022/01/26",
        roomNumber: 15,
      },
      {
        id: "5fwrgu4i7k55hl6wd",
        userID: 14,
        date: "2022/01/12",
        roomNumber: 22,
      },
    ];
    roomsData = [
      //rooms data is an array of objects of room info NO customer ID
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 17,
        roomType: "junior suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 328.15,
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26,
      },
      {
        number: 15,
        roomType: "residential suite",
        bidet: false,
        bedSize: "full",
        numBeds: 1,
        costPerNight: 294.56,
      },
      {
        number: 22,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 350.31,
      },
    ];

    guest14 = new Guest(customersData[0]);
    guest15 = new Guest(customersData[1]);
    guest16 = new Guest(customersData[2]);
  });

  it("should be a function", () => {
    expect(Guest).to.be.a("function");
  });

  it("should be an instance of Guest", () => {
    expect(guest15).to.be.an.instanceOf(Guest);
  });

  it("should hold a single guest", () => {
    expect(guest14.customer).to.equal(customersData[0]);
  });

  it("should have a name", () => {
    expect(guest14.customer.name).to.equal("Dallas Schultz");
    expect(guest15.customer.name).to.equal("Maria Lakin");
  });

  it("should have an id", () => {
    expect(guest15.customer.id).to.equal(15);
    expect(guest16.customer.id).to.equal(16);
  });

  it("should be able to split guest's name", () => {
    expect(guest14.returnGuestFirstName()).to.equal("Dallas");
    expect(guest16.returnGuestFirstName()).to.equal("Garry");
  });

  it("should store all the guests bookings both past and upcoming", () => {
    expect(guest14.returnAllGuestsBookings()).to.equal(", ");
    expect(guest15.returnAllGuestsBookings()).to.equal(", ");
  });

  it("should return an error message if the guest has no bookings", () => {
    expect(guest16.returnAllGuestsBookings()).to.equal(
      "Sorry, we couldn't find any booking for you."
    );
  });

  it("should store the total amount a Guest has spent on all hotel stays", () => {
    expect(guest14.returnTotalSpentonRooms()).to.equal("$1000.00");
    expect(guest14.returnTotalSpentonRooms()).to.equal("$1000.00");
  });

  it("should store the total amount a Guest has spent even if they have spent no money on any hotel stays", () => {
    expect(guest16.returnTotalSpentonRooms()).to.equal("$0");
  });
});
