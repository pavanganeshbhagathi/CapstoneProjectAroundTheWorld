import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-indiasinglecard',
  templateUrl: './indiasinglecard.component.html',
  styleUrls: ['./indiasinglecard.component.css']
})
export class IndiasinglecardComponent implements OnInit {

  private id: number;

  latitude = 51.678418;
  longitude = 7.809007;
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
  backList(): any {
    this.router.navigate(['trips']);
  }


}
