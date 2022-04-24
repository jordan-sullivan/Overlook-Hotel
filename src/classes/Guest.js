class Guest {
  constructor(customer, bookingsData, roomsData) {
    this.name = customer.name;
    this.id = customer.id;
    this.username = `${customer.name}${customer.id}`;
    this.bookingsInfo = this.getBookingsInfo(bookingsData);
    this.roomsInfo = [];
    this.totalSpent = 0;
  }

  returnGuestFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }

  getBookingsInfo(bookingsData) {
    //console.log("BDBDBDBDBD", bookingsData);
    const booked = bookingsData.filter((booking) => booking.userID === this.id);
    //console.log("booked", booked);
    return booked;
  }

  returnNoBookingsMessage() {
    if (this.bookingsInfo.length === 0) {
      return "It looks like you haven't stayed with us yet.";
    }
  }

  getRoomsInfo(roomsData, bookingsData) {
    this.bookingsInfo.forEach((booking) =>
      roomsData.forEach((room) => {
        if (booking.roomNumber === room.number) {
          this.roomsInfo.push(room);
        }
      })
    );
    return this.roomsInfo;
  }

  //.reduce((roomTotals, room) => {
  //   this.bookingsData.forEach((booking) => {
  //     if (room.number === booking.roomNumber) {
  //       return roomTotals.push(room.costPerNight);
  //     }
  //   });
  //   console.log("ROOM TOTALS", roomTotals);
  //   return roomTotals;
  // }, []);
  //}

  // returnTotalSpentonRooms(bookings, roomsData) {
  //   //I can match the
  //   //roomNumber to the
  //   //roomsData array room.costPerNight and get the //
  //   //return TotalSpentonRooms
  //   //interpolate with a $
  // }
}

// sortBookingsByDate() {
// this.bookings.sort((a, b) => {
//     return a.date > b.date ? -1 : 1;
//     })
// }

// Iteration 2. Customer Interaction
// As a customer:
//
// I should be able to select a date for which I’d like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
// I should be able to filter the list of available rooms by their roomType property
// I should be able to select a room for booking
export default Guest;
