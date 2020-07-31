import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-tripsearchingbysubtype',
  templateUrl: './tripsearchingbysubtype.component.html',
  styleUrls: ['./tripsearchingbysubtype.component.css']
})
export class TripsearchingbysubtypeComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  subtype: string;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.subtype = params.get('subtype');
      this.getDetailsBySUbType(this.subtype);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getDetailsBySUbType(subtype: string): any {
    this.placeserviceService.getplaceSubType(subtype).subscribe((response) =>
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
