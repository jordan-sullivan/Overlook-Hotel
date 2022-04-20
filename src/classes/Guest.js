class Guest {
  constructor(customer, bookings) {
    this.name = customer.name;
    this.id = customer.id;
    this.bookingsData = bookings;
    this.roomsData = [];
    //this.customersData = [];
  }

  returnGuestFirstName() {
    const splitName = this.name.split(" ");
    return splitName[0];
  }

  returnNoBookingsMessage() {
    if (this.bookingsData.length === 0) {
      return "Sorry, we couldn't find any bookings for you.";
    }
  }

  returnTotalSpentonRooms() {
    // The total amount I have spent on rooms
    //Once I have the returned array from the returnAllGuestsBookings(), I can match the roomNumber to the roomsData array room.costPerNight and get the returnTotalSpentonRooms//interpolate with a $
  }
}
// 1. Dashboard
// As a customer:
//
// I should see a dashboard page that shows me:

// Iteration 2. Customer Interaction
// As a customer:
//
// I should be able to select a date for which I’d like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
// I should be able to filter the list of available rooms by their roomType property
// I should be able to select a room for booking
export default Guest;
