import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-tripsearchingbyseason',
  templateUrl: './tripsearchingbyseason.component.html',
  styleUrls: ['./tripsearchingbyseason.component.css']
})
export class TripsearchingbyseasonComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  season: string;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.season = params.get('season');
      this.getplaceBySeason(this.season);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getplaceBySeason(season: string): any {
    this.placeserviceService.getplaceBySeason(season).subscribe((response) =>
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
