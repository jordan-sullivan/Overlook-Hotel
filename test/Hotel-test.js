import { expect } from "chai";
import Hotel from "../src/classes/Hotel";
import Guest from "../src/classes/Guest";
import Room from "../src/classes/Room";
import Booking from "../src/classes/Booking";

describe("Hotel", () => {
  let customersData,
    guests,
    hotel,
    booking1,
    booking2,
    booking3,
    booking4,
    room1,
    room2,
    room3,
    bookingArray,
    bookingArray2,
    rooms;

  beforeEach(() => {
    customersData = [
      {
        id: 14,
        name: "Dallas Schultz",
      },
      {
        id: 15,
        name: "Maria Lakin",
      },
      {
        id: 16,
        name: "Garry Mills",
      },
    ];

    hotel = new Hotel(guests, rooms);

    room1 = new Room({
      bedSize: "queen",
      bidet: true,
      costPerNight: 300.0,
      numBeds: 1,
      number: 6,
      roomType: "junior suite",
    });

    room2 = new Room({
      bedSize: "king",
      bidet: false,
      costPerNight: 400.0,
      numBeds: 2,
      number: 18,
      roomType: "junior suite",
    });

    room3 = new Room({
      bedSize: "twin",
      bidet: false,
      costPerNight: 200.0,
      numBeds: 2,
      number: 9,
      roomType: "suite",
    });

    booking1 = new Booking({
      date: "2020/02/08",
      id: "5fwrgu4i7k55hl78v",
      roomNumber: 25,
      roomServiceCharges: [],
      userID: 1,
    });

    booking2 = new Booking({
      date: "2020/01/25",
      id: "5fwrgu4i7k55hl78r",
      roomNumber: 23,
      roomServiceCharges: [],
      userID: 1,
    });

    booking3 = new Booking({
      date: "2020/01/25",
      id: "5fwrgu4i7k55hl78d",
      roomNumber: 25,
      roomServiceCharges: [],
      userID: 2,
    });

    booking4 = new Booking({
      date: "2020/01/22",
      id: "5fwrgu4i7k55hl795",
      roomNumber: 9,
      roomServiceCharges: [],
      userID: 2,
    });

    bookingArray = [];
    bookingArray2 = [];
    guests = [];
    rooms = [];

    bookingArray.push(booking1, booking2);
    bookingArray2.push(booking3, booking4);

    guests.push(customersData[0], customersData[1], customersData[2]);
    rooms.push(room1, room2, room3);
  });

  it("should be a function", function () {
    expect(Hotel).to.be.a("function");
  });

  it("should be an instance of hotel", function () {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it("should hold an array of guests", function () {
    expect(hotel.guests).to.deep.equal([
      customersData[0],
      customersData[1],
      customersData[2],
    ]);
    expect(hotel.guests.length).to.equal(3);
  });

  it("should find all rooms that are not booked on a given date", function () {
    let vacant = hotel.findAvailableRooms(bookingArray2, "2020/01/24");
    let vacant2 = hotel.findAvailableRooms(bookingArray2, "2020/01/22");
    expect(vacant.length).to.equal(3);
    expect(vacant2.length).to.equal(2);
  });
});
