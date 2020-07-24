import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-worldtripsall',
  templateUrl: './worldtripsall.component.html',
  styleUrls: ['./worldtripsall.component.css']
})
export class WorldtripsallComponent implements OnInit {

  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  season: String;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {
    this.getplaceByname();
  }


  // tslint:disable-next-line:ban-types
  getplaceByname(): any {
    this.placeserviceService.getplaceByname('world').subscribe((response) =>
      this.allplaces = response);
  }

  onClick(placeId: number): any {
    // this.router.navigate(['wolrdtripSingleCard', placeId]);
  //  this.router.navigate([{ outlets: { worldtripsOutlet: ['worldtripSingleCard', placeId] } }], { relativeTo: this.route });
    this.router.navigate(['tripSingleCard', placeId]);
}



}
