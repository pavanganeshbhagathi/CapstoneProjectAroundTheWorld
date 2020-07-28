import { Component, OnInit } from '@angular/core';
import { Place } from './../../model/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceserviceService } from 'src/app/service/placeservice.service';

@Component({
  selector: 'app-indiatripsall',
  templateUrl: './indiatripsall.component.html',
  styleUrls: ['./indiatripsall.component.css']
})
export class IndiatripsallComponent implements OnInit {
  allplaces: Place[];
  latitude: number;
  longitude: number;
  // tslint:disable-next-line:ban-types
  season: string;
  locationChosen = false;
  hidden = false;
  panelOpenState = false;
  placeId: any;
  constructor(private route: ActivatedRoute, private placeserviceService: PlaceserviceService, private router: Router) { }
  ngOnInit(): void {
    this.getplaceByname();
  }


  // tslint:disable-next-line:ban-types
  getplaceByname(): any {
    this.placeserviceService.getplaceByname('india').subscribe((response) =>
      this.allplaces = response);
  }

  onClick(placeId: number): any {
    // this.router.navigate(['indiatripSingleCard', placeId]);
    this.router.navigate(['tripSingleCard', placeId]);

   // this.router.navigate([{ outlets: { indiatripsOutlet: ['indiatripSingleCard', placeId] } }], { relativeTo: this.route });

  }

}
