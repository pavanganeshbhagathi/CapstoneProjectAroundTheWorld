import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-tripsearchingbybetweenpack',
  templateUrl: './tripsearchingbybetweenpack.component.html',
  styleUrls: ['./tripsearchingbybetweenpack.component.css']
})
export class TripsearchingbybetweenpackComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  start: number;
  end: number;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.start = +params.get('start');
      this.end = +params.get('end');
      this.getplaceBewteenPackage(this.start, this.end);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getplaceBewteenPackage(start: number, end: number): any {
    this.placeserviceService.getplaceBewteenPackage(start, end).subscribe((response) =>
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
    // this.router.navigate(['tripSingleCard', placeId]);
   // this.router.navigate([{ outlets: { tripsOutlet: ['tripSingleCard', placeId] } }], { relativeTo: this.route });
  }

}
