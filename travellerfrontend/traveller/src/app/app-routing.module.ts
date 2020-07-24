import { WorldtripsearchbysubtypeComponent } from './components/worldtripsearchbysubtype/worldtripsearchbysubtype.component';
import { IndiatripsearchbysubtypeComponent } from './components/indiatripsearchbysubtype/indiatripsearchbysubtype.component';
import { TripsinglecardComponent } from './components/tripsinglecard/tripsinglecard.component';
import { TripsearchingbysubtypeComponent } from './components/tripsearchingbysubtype/tripsearchingbysubtype.component';
import { IndiatripsallComponent } from './components/indiatripsall/indiatripsall.component';
import { WorldtripsallComponent } from './components/worldtripsall/worldtripsall.component';
import { WorldtripsComponent } from './components/worldtrips/worldtrips.component';
import { IndiaComponent } from './components/india/india.component';
import { TripsComponent } from './components/trips/trips.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsallComponent } from './components/tripsall/tripsall.component';
import { TripsearchingbyseasonComponent } from './components/tripsearchingbyseason/tripsearchingbyseason.component';
import { TripsearchingbyratingComponent } from './components/tripsearchingbyrating/tripsearchingbyrating.component';
import { TripsearchingbybetweenpackComponent } from './components/tripsearchingbybetweenpack/tripsearchingbybetweenpack.component';
import { IndiatripsearchbyseasonComponent } from './components/indiatripsearchbyseason/indiatripsearchbyseason.component';
import { IndiatripsearchbyratingComponent } from './components/indiatripsearchbyrating/indiatripsearchbyrating.component';
import { IndiatripsearchbybetweenpackComponent } from './components/indiatripsearchbybetweenpack/indiatripsearchbybetweenpack.component';
import { IndiasinglecardComponent } from './components/indiasinglecard/indiasinglecard.component';
import { WorldtripsearchbyseasonComponent } from './components/worldtripsearchbyseason/worldtripsearchbyseason.component';
import { WorldtripsearchbyratingComponent } from './components/worldtripsearchbyrating/worldtripsearchbyrating.component';
import { WorldtripsearchbybetweenpackComponent } from './components/worldtripsearchbybetweenpack/worldtripsearchbybetweenpack.component';
import { WorldsinglecardComponent } from './components/worldsinglecard/worldsinglecard.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path: '', component: LoginpageComponent},
  {path: 'home', component: LandingpageComponent},
  {path: 'logout', component: LoginpageComponent},
  {path: 'aboutus', component: AboutusComponent},
  { path: 'gallery', component: GalleryComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'tripSingleCard/:id', component: TripsinglecardComponent },
  {path: 'trips', component: TripsComponent,
  children: [
    {path: '', component: TripsallComponent, outlet: 'tripsOutlet'},
    { path: 'tripsallSearchBySubType/:subtype', component: TripsearchingbysubtypeComponent, outlet: 'tripsOutlet' },
    { path: 'tripsallSearchBySeason/:season', component: TripsearchingbyseasonComponent, outlet: 'tripsOutlet' },
    { path: 'tripsallSearchByRating/:rating', component: TripsearchingbyratingComponent, outlet: 'tripsOutlet' },
    { path: 'tripsallSearchByBetweenPack/:start/end/:end', component: TripsearchingbybetweenpackComponent, outlet: 'tripsOutlet' },
    {path: 'tripSingleCard/:id', component: TripsinglecardComponent, outlet: 'tripsOutlet'}

  ]},
  {path: 'worldtrips', component: WorldtripsComponent,
  children: [
    {path: '', component: WorldtripsallComponent, outlet: 'worldtripsOutlet'},
    { path: 'worldtripSearchBySubType/:subtype', component:  WorldtripsearchbysubtypeComponent , outlet: 'worldtripsOutlet' },
    { path: 'worldtripSearchBySeason/:season', component: WorldtripsearchbyseasonComponent , outlet: 'worldtripsOutlet' },
    { path: 'worldtripSearchByRating/:rating', component: WorldtripsearchbyratingComponent , outlet: 'worldtripsOutlet' },
    { path: 'worldtripSearchByBetweenPack/:start/end/:end', component: WorldtripsearchbybetweenpackComponent , outlet: 'worldtripsOutlet' },
    {path: 'worldtripSingleCard/:id', component: WorldsinglecardComponent, outlet: 'worldtripsOutlet' }
  ]
},
  {path: 'indiatrips', component: IndiaComponent,  children: [
    {path: '', component: IndiatripsallComponent, outlet: 'indiatripsOutlet'},
    {path: 'indiatripSearchBySubType/:subtype', component: IndiatripsearchbysubtypeComponent , outlet: 'indiatripsOutlet'},
    {path: 'indiatripSearchBySeason/:season', component: IndiatripsearchbyseasonComponent , outlet: 'indiatripsOutlet'},
    {path: 'indiatripSearchByRating/:rating', component: IndiatripsearchbyratingComponent , outlet: 'indiatripsOutlet'},
    {path: 'indiatripSearchByBetweenPack/:start/end/:end', component: IndiatripsearchbybetweenpackComponent, outlet: 'indiatripsOutlet'},
    {path: 'indiatripSingleCard/:id', component: IndiasinglecardComponent, outlet: 'indiatripsOutlet'}
  ]},
];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
