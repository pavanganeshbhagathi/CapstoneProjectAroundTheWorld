import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-tripsearchingbyrating',
  templateUrl: './tripsearchingbyrating.component.html',
  styleUrls: ['./tripsearchingbyrating.component.css']
})
export class TripsearchingbyratingComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  rating: number;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.rating = +params.get('rating');
      this.getplaceByRating(this.rating);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getplaceByRating(rating: number): any {
    this.placeserviceService.getplaceByRating(rating).subscribe((response) =>
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
