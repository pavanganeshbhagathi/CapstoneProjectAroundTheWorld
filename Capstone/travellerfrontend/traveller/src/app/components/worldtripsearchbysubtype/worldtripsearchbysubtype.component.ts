import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-worldtripsearchbysubtype',
  templateUrl: './worldtripsearchbysubtype.component.html',
  styleUrls: ['./worldtripsearchbysubtype.component.css']
})
export class WorldtripsearchbysubtypeComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  subtype: string;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.subtype = params.get('subtype');
      this.getTwoplaceTypeAndSubType('india', this.subtype);
    }
    );

  }

  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndSubType(placeType: string, SubType: string): any {
    this.placeserviceService.getTwoplaceTypeAndSubType(placeType, SubType).subscribe((response) =>
      this.allplaces = response);

  }

  onClick(placeId: number): any {
    this.router.navigate(['worldtripSingleCard', placeId]);
   }

}
