import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-indiatripsearchbyrating',
  templateUrl: './indiatripsearchbyrating.component.html',
  styleUrls: ['./indiatripsearchbyrating.component.css']
})
export class IndiatripsearchbyratingComponent implements OnInit {

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
      this.getTwoplaceTypeAndPlaceRating('india', this.rating);
    }
    );

  }

  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndPlaceRating(placeType: String, rating: number): any {
    this.placeserviceService.getTwoplaceTypeAndPlaceRating(placeType, rating).subscribe((response) =>
      this.allplaces = response);

  }

  onClick(placeId: number): any {
    // this.router.navigate(['wolrdtripSingleCard', placeId]);
   // this.router.navigate([{ outlets: { indiatripsOutlet: ['indiatripSingleCard', placeId] } }], { relativeTo: this.route });
    this.router.navigate(['tripSingleCard', placeId]);

  }

}
