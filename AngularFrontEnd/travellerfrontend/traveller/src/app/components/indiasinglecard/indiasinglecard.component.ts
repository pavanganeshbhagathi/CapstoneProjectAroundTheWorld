import { Booking } from './../../model/booking';
import { BookingComponent } from './../../snackBar/booking/booking.component';
import { BookingService } from './../../service/booking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';
import { WeatherapiService } from './../../service/weatherapi.service';

@Component({
  selector: 'app-indiasinglecard',
  templateUrl: './indiasinglecard.component.html',
  styleUrls: ['./indiasinglecard.component.css']
})
export class IndiasinglecardComponent implements OnInit {
  private id: number;
  latitude: number;
  longitude: number;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  allplaces: Place;
  starClassName = 'star-rating-blank';
  WeatherData: any;
  name: string;
  sessionValue = '';
  userName = '';
  email = '';
  durationInSeconds = 1;
  book: Booking;


  constructor(
    private route: ActivatedRoute,
    private weatherapiService: WeatherapiService,
    private placeserviceService: PlaceserviceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private bookingService: BookingService
    /* public session: SessionStorageService */
  ) {}
  ngOnInit(): any {
    this.userName = sessionStorage.getItem('UserName');
    this.email = sessionStorage.getItem('EmailId');
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.viewPlaceDetails(this.id);
    }
    );
  }

  viewPlaceDetails(id: number): any {
    this.placeserviceService.getplaceById(id).subscribe((response) =>
      this.allplaces = response);
  }


  viewNextPlace(): any {
    this.id = this.id + 1;
    this.router.navigate(['indiatripSingleCard', this.id]);
  }


  onChoseLocation(event): any {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  toggleBadgeVisibility(): any {
    this.hidden = !this.hidden;
  }
  backList(): any {
    this.router.navigate(['indiatrips']);
  }

  getWeatherData(name: string): any {

    this.weatherapiService.getWeatherbyName(name).subscribe((response) =>
      this.WeatherData = response);
    console.log(JSON.stringify(this.WeatherData));

  }

  setWeatherData(data): void {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let current_date = new Date();
    this.WeatherData.temp_celsius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
  submit(placeName: string, placePack: number): any
  {
    const bookObj = new Booking(0, placeName, placePack, '', this.email , this.userName);
    this.snackBar.openFromComponent(BookingComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['success']
    });

    this.bookingService.createOrder(bookObj).subscribe((response) =>
  this.book = response);
  }



}
