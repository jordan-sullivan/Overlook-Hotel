import { expect } from "chai";
import Hotel from "../src/classes/Hotel";
import Guest from "../src/classes/Guest";

//NOTE: guests will refer to the guest interaction with the site,
// customer will refer to the data information

describe("Hotel", () => {
  let customersData, bookingsData, roomsData, guest14, guest15, guest16, hotel;

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
      //roomsData.filter((room) => room.number === booking.roomNumber);
      //console.log("14", guest14);
    );
    guest15 = new Guest(
      customersData[1],
      bookingsData.filter((booking) => booking.userID === 15)
    );
    guest16 = new Guest(
      customersData[2],
      bookingsData.filter((booking) => booking.userID === 16)
    );
    hotel = new Hotel();
  });

  //soooo... the guest can do these from their class, needed?
  it.skip("should store all the guests bookings both past and upcoming", () => {
    expect(guest14.bookingsData).to.deep.equal([
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
      expect(guest15.bookingsData).to.deep.equal([
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

  it.skip("should return an error message if the guest has no bookings", () => {
    expect(guest16.returnNoBookingsMessage()).to.equal(
      "It looks like you haven't stayed with us yet."
    );
  });

  it.skip("should store the total amount a guest has spent on all hotel stays", () => {
    expect(guest14.returnTotalSpentonRooms()).to.equal("$1000.00");
    expect(guest14.returnTotalSpentonRooms()).to.equal("$1000.00");
  });

  it.skip("should return $0 if a guest has spent no money on any hotel stays", () => {
    expect(guest16.returnTotalSpentonRooms()).to.equal("$0");
  });
});
