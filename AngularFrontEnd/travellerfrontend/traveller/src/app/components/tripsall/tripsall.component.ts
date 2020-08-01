import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tripsall',
  templateUrl: './tripsall.component.html',
  styleUrls: ['./tripsall.component.css']
})
export class TripsallComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  season: String;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService,
              private router: Router, config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.interval = 2000;
      config.wrap = true;
      config.keyboard = false;
      config.pauseOnHover = true;
    }
  ngOnInit(): void {
    this.getAllPlace();
  }


  // tslint:disable-next-line:ban-types
  getAllPlace(): any {
    this.placeserviceService.getAllPlace().subscribe((response) =>
      this.allplaces = response);
  }
  onChoseLocation(event): any {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  toggleBadgeVisibility(): any {
    this.hidden = !this.hidden;
  }
  onClick(placeId: number): any {
    this.router.navigate(['tripSingleCard', placeId]);
  }


}

