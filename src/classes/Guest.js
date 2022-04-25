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
    const booked = bookingsData.filter((booking) => booking.userID === this.id);
    return booked;
  }

  returnNoBookingsMessage() {
    if (this.bookingsInfo.length === 0) {
      return "It looks like you haven't stayed with us yet.";
    }
  }

  getRoomsInfo(roomsData, bookingsData) {
    this.bookingsInfo.forEach((booking) => {
      roomsData.forEach((room) => {
        if (booking.roomNumber === room.number) {
          this.roomsInfo.push(room);
        }
      });
    });
    return this.roomsInfo;
  }

  returnTotalSpentOnRooms() {
    let total = this.roomsInfo.reduce((acc, room) => {
      acc += room.costPerNight;
      return acc;
    }, 0);
    return (this.totalSpent = total.toFixed(2));
  }

  // sortBookingsByDate() {
  //   this.bookingsInfo.sort((a, b) => {
  //     console.log(this.bookingsInfo);
  //     console.log(a.date > b.date ? -1 : 1);
  //     return a.date > b.date ? -1 : 1;
  //   });
  // }
}

export default Guest;
