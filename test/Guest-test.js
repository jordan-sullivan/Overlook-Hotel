import { expect } from "chai";
import Guest from "../src/classes/Guest";

//NOTE: guests will refer to the guest interaction with the site,
// customer will refer to the data information

describe("Guest", () => {
  let customersData, bookingsData, roomsData, guest14, guest15, guest16;

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

    guest14 = new Guest(customersData[0], bookingsData, roomsData);
    guest15 = new Guest(customersData[1], bookingsData, roomsData);
    guest16 = new Guest(customersData[2], bookingsData, roomsData);
  });

  it("should be a function", () => {
    expect(Guest).to.be.a("function");
  });

  it("should be an instance of Guest", () => {
    expect(guest15).to.be.an.instanceOf(Guest);
  });

  it("should have a name", () => {
    expect(guest14.name).to.equal("Dallas Schultz");
    expect(guest15.name).to.equal("Maria Lakin");
  });

  it("should have an id", () => {
    expect(guest15.id).to.equal(15);
    expect(guest16.id).to.equal(16);
  });

  it("should be able to split guest's name", () => {
    expect(guest14.returnGuestFirstName()).to.equal("Dallas");
    expect(guest16.returnGuestFirstName()).to.equal("Garry");
  });

  it("should store all the guests bookings both past and upcoming", () => {
    expect(guest14.getBookingsInfo(bookingsData)).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6u7",
        userID: 14,
        date: "2022/01/16",
        roomNumber: 17,
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
    ]),
      expect(guest15.bookingsInfo).to.deep.equal([
        {
          id: "5fwrgu4i7k55hl6tn",
          userID: 15,
          date: "2022/01/17",
          roomNumber: 5,
        },
        {
          id: "5fwrgu4i7k55hl6w1",
          userID: 15,
          date: "2022/02/19",
          roomNumber: 8,
        },
      ]);
  });

  it("should return an error message if the guest has no bookings", () => {
    expect(guest16.returnNoBookingsMessage()).to.equal(
      "It looks like you haven't stayed with us yet."
    );
  });

  it("should store all the guests rooms they have stayed in both past and upcoming", () => {
    expect(guest14.getRoomsInfo(roomsData, bookingsData)).to.deep.equal([
      {
        number: 17,
        roomType: "junior suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 328.15,
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
    ]);
    expect(guest15.getRoomsInfo(roomsData, bookingsData)).to.deep.equal([
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26,
      },
    ]);
  });

  it("should return an empty array if the guest has never stayed in a room and has no upcoming room reservations", () => {
    expect(guest16.getRoomsInfo(roomsData, bookingsData)).to.deep.equal([]);
  });

  it("should store the total amount a Guest has spent on all hotel stays", () => {
    guest14.getRoomsInfo(roomsData, bookingsData);
    expect(guest14.returnTotalSpentOnRooms()).to.equal(973.02);
    //expect(guest15.returnTotalSpentonRooms(bookingsData)).to.equal("$1000.00");
  });

  it.skip("should return $0 if a guest has spent no money on any hotel stays", () => {
    expect(guest16.returnTotalSpentOnRooms(roomsData, bookingsData)).to.equal(
      "$0"
    );
  });
});
