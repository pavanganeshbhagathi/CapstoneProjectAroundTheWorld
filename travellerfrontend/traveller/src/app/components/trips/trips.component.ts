import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OpeningComponent } from './../../snackBar/opening/opening.component';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  durationInSeconds = 1;
  panelOpenState = false;
  constructor( private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:ban-types
  openSubtype(subtype: string): any
  {
  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { tripsOutlet: ['tripsallSearchBySubType', subtype] }}], {relativeTo: this.route});
  }

  // tslint:disable-next-line:ban-types
  openSeasons(seasontype: string): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { tripsOutlet: ['tripsallSearchBySeason', seasontype] }}], {relativeTo: this.route});
  }
  openRating(rating: number): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { tripsOutlet: ['tripsallSearchByRating', rating] }}], {relativeTo: this.route});
  }
  openPackage(start: number, end: number): any
  {

  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { tripsOutlet: ['tripsallSearchByBetweenPack', start,  'end', end] }}], {relativeTo: this.route});
  }

}
