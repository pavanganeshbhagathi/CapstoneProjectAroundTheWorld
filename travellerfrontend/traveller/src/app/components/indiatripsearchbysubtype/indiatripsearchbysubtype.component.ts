import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-indiatripsearchbysubtype',
  templateUrl: './indiatripsearchbysubtype.component.html',
  styleUrls: ['./indiatripsearchbysubtype.component.css']
})
export class IndiatripsearchbysubtypeComponent implements OnInit {

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
    // this.router.navigate(['indiatripSingleCard', placeId]);
    // this.router.navigate([{ outlets: { indiatripsOutlet: ['indiatripSingleCard', placeId] } }], { relativeTo: this.route });
    this.router.navigate(['tripSingleCard', placeId]);
  }
}
