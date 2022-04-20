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
});
