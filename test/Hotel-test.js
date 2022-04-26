import { expect } from "chai";
import Hotel from "../src/classes/Hotel";
import Guest from "../src/classes/Guest";
//import Room from "../src/classes/Room";
//import Booking from "../src/classes/Booking";

describe("Hotel", () => {
  let customersData,
    bookingsData,
    roomsData,
    guest14,
    guest15,
    guest16,
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

    bookingsData = [
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

    guest14 = new Guest(
      customersData[0],
      bookingsData.filter((booking) => booking.userID === 14)
    );
    guest15 = new Guest(
      customersData[1],
      bookingsData.filter((booking) => booking.userID === 15)
    );
    guest16 = new Guest(
      customersData[2],
      bookingsData.filter((booking) => booking.userID === 16)
    );
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

    guests.push(customersData[0], customersData[1]);
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
