import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-indiatripsearchbyseason',
  templateUrl: './indiatripsearchbyseason.component.html',
  styleUrls: ['./indiatripsearchbyseason.component.css']
})
export class IndiatripsearchbyseasonComponent implements OnInit {

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
      this.getTwoplaceTypeAndSeason('india', this.season);
    }
    );

  }

  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndSeason(placeType: string, Season: string): any {
    this.placeserviceService.getTwoplaceTypeAndSeason(placeType, Season).subscribe((response) =>
      this.allplaces = response);

  }

  onClick(placeId: number): any {
    this.router.navigate(['indiatripSingleCard', placeId]);
  }


}
