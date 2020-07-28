import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from './../../service/placeservice.service';
import { Place } from './../../model/place';
import { WeatherapiService } from './../../service/weatherapi.service';

@Component({
  selector: 'app-tripsinglecard',
  templateUrl: './tripsinglecard.component.html',
  styleUrls: ['./tripsinglecard.component.css']
})
export class TripsinglecardComponent implements OnInit {

  private id: number;
  latitude: number ;
  longitude: number;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  allplaces: Place;
  starClassName = 'star-rating-blank';
  WeatherData: any;
  name: string;

  constructor(private route: ActivatedRoute,
              private weatherapiService: WeatherapiService, private placeserviceService: PlaceserviceService, private router: Router) { }

  ngOnInit(): any {
    this.WeatherData = {
      main: {},
      isDay: true
    };

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
    this.router.navigate(['tripSingleCard', this.id]);
    }


onChoseLocation(event): any {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
}


toggleBadgeVisibility(): any {
  this.hidden = !this.hidden;
}
  backList(): any
  {
    this.router.navigate(['trips']);
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

}
