export class Booking {
  bookingId: number;
  bookingPlace: string;
  bookingorderPrice: number;
  orderDate: any;
  userEmail: string;
  username: string;
  constructor( bookingId: number,  bookingPlace: string, bookingorderPrice: number,  orderDate: any,  userEmail: string, username: string)
  {
  this.bookingId = bookingId;
  this.bookingPlace = bookingPlace;
  this.bookingorderPrice = bookingorderPrice;
  this.orderDate = orderDate;
  this.userEmail = userEmail;
  this.username = username;
  }
}
