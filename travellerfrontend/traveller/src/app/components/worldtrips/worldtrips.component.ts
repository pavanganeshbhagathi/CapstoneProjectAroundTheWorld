import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OpeningComponent } from './../../snackBar/opening/opening.component';
@Component({
  selector: 'app-worldtrips',
  templateUrl: './worldtrips.component.html',
  styleUrls: ['./worldtrips.component.css']
})
export class WorldtripsComponent implements OnInit {
  durationInSeconds = 1;
  panelOpenState = false;
  constructor(private router: Router, private route: ActivatedRoute , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:ban-types
  openSubtype(subtype: String): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { worldtripsOutlet: ['worldtripSearchBySubType', subtype] }}], {relativeTo: this.route});
  }

// tslint:disable-next-line:ban-types
openSeasons(seasontype: String): any
{
    this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
    this.router.navigate([{ outlets: { worldtripsOutlet: ['worldtripSearchBySeason', seasontype] }}], {relativeTo: this.route});
}
openRating(rating: number): any
{
  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { worldtripsOutlet: ['worldtripSearchByRating', rating] }}], {relativeTo: this.route});
}
openPackage(start: number, end: number): any
{
    this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
    this.router.navigate([{ outlets: { worldtripsOutlet: ['worldtripSearchByBetweenPack', start, 'end', end] }}], {relativeTo: this.route});
}
}
