import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from './../../service/placeservice.service';
import { Place } from './../../model/place';

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

  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }

  ngOnInit(): any {
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
    // this.router.navigate([{ outlets: { tripsOutlet: ['tripSingleCard', this.id] }}], {relativeTo: this.route});
   // this.router.navigate([{ outlets: { tripsOutlet: ['tripSingleCard', this.id] } }], { relativeTo: this.route });
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

}
