class Guest {
  constructor(customer, bookings) {
    this.name = customer.name;
    this.id = customer.id;
    this.username = `${customer.name}${customer.id}`;
    this.bookingsData = bookings; //array of their bookings
    this.roomsData = [];
    this.totalSpent = 0;
  }

  returnGuestFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }

  returnNoBookingsMessage() {
    if (this.bookingsData.length === 0) {
      return "It looks like you haven't stayed with us yet.";
    }
  }

  returnTotalSpentonRooms() {
    // The total amount I have spent on rooms
    //Once I have the
    //WHAT IS THE returned array from the returnAllGuestsBookings(),
    // console.log(this.bookingsData.forEach((booking) => booking.roomNumber === ));
    //I can match the
    //roomNumber to the
    //roomsData array room.costPerNight and get the //
    //return TotalSpentonRooms
    //interpolate with a $
  }
}

// Iteration 2. Customer Interaction
// As a customer:
//
// I should be able to select a date for which I’d like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
// I should be able to filter the list of available rooms by their roomType property
// I should be able to select a room for booking
export default Guest;
