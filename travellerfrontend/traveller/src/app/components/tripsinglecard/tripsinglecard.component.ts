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
  latitude: any ;
  longitude: any;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  allplaces: Place;
  starClassName = 'star-rating-blank';
  WeatherData: any;

  constructor(private route: ActivatedRoute,
              private weatherapiService: WeatherapiService, private placeserviceService: PlaceserviceService, private router: Router) { }

  ngOnInit(): any {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
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

  getWeatherData(): any {
    this.weatherapiService.getWeather('35', '139').subscribe((response) =>
      this.WeatherData = response);
  }
}
