import { OpeningComponent } from './../../snackBar/opening/opening.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  durationInSeconds = 2;
  panelOpenState = false;
  constructor(private router: Router, private route: ActivatedRoute , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
 // tslint:disable-next-line:ban-types
 openSubtype(subtype: string): any
 {
  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { indiatripsOutlet:  ['indiatripSearchBySubType', subtype] }}], {relativeTo: this.route});
 }


// tslint:disable-next-line:ban-types
openSeasons(seasontype: string): any
{
  this.snackBar.openFromComponent(OpeningComponent, {
    panelClass: ['success'],
    duration: this.durationInSeconds * 1000,

  });
  this.router.navigate([{ outlets: { indiatripsOutlet: ['indiatripSearchBySeason', seasontype] }}], {relativeTo: this.route});
}
openRating(rating: number): any
{
  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { indiatripsOutlet: ['indiatripSearchByRating', rating] }}], {relativeTo: this.route});
}
openPackage(start: number, end: number): any
{
  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { indiatripsOutlet: ['indiatripSearchByBetweenPack', start, 'end', end] }}], {relativeTo: this.route});
}
}
