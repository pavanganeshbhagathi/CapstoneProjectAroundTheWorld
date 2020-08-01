// Configuration
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AngularWebStorageModule } from 'angular-web-storage';
// Material Card
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
// Components

import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginsnackbarComponent } from './snackBar/loginsnackbar/loginsnackbar.component';
import { LoginFailssnackbarComponent } from './snackBar/login-failssnackbar/login-failssnackbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginheaderComponent } from './components/loginheader/loginheader.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TripsComponent } from './components/trips/trips.component';
import { IndiaComponent } from './components/india/india.component';
import { WorldtripsComponent } from './components/worldtrips/worldtrips.component';
import { TripsallComponent } from './components/tripsall/tripsall.component';
import { WorldtripsallComponent } from './components/worldtripsall/worldtripsall.component';
import { IndiatripsallComponent } from './components/indiatripsall/indiatripsall.component';
import { TripsearchingbysubtypeComponent } from './components/tripsearchingbysubtype/tripsearchingbysubtype.component';
import { TripsearchingbyseasonComponent } from './components/tripsearchingbyseason/tripsearchingbyseason.component';
import { TripsearchingbyratingComponent } from './components/tripsearchingbyrating/tripsearchingbyrating.component';
import { TripsearchingbybetweenpackComponent } from './components/tripsearchingbybetweenpack/tripsearchingbybetweenpack.component';
import { TripsinglecardComponent } from './components/tripsinglecard/tripsinglecard.component';
import { IndiatripsearchbysubtypeComponent } from './components/indiatripsearchbysubtype/indiatripsearchbysubtype.component';
import { IndiatripsearchbyseasonComponent } from './components/indiatripsearchbyseason/indiatripsearchbyseason.component';
import { IndiatripsearchbyratingComponent } from './components/indiatripsearchbyrating/indiatripsearchbyrating.component';
import { IndiatripsearchbybetweenpackComponent } from './components/indiatripsearchbybetweenpack/indiatripsearchbybetweenpack.component';
import { IndiasinglecardComponent } from './components/indiasinglecard/indiasinglecard.component';
import { WorldtripsearchbysubtypeComponent } from './components/worldtripsearchbysubtype/worldtripsearchbysubtype.component';
import { WorldtripsearchbyseasonComponent } from './components/worldtripsearchbyseason/worldtripsearchbyseason.component';
import { WorldtripsearchbyratingComponent } from './components/worldtripsearchbyrating/worldtripsearchbyrating.component';
import { WorldtripsearchbybetweenpackComponent } from './components/worldtripsearchbybetweenpack/worldtripsearchbybetweenpack.component';
import { WorldsinglecardComponent } from './components/worldsinglecard/worldsinglecard.component';
import { OpeningComponent } from './snackBar/opening/opening.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { BookingComponent } from './snackBar/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    LandingpageComponent,
    LoginsnackbarComponent,
    LoginFailssnackbarComponent,
    HeaderComponent,
    FooterComponent,
    LoginheaderComponent,
    AboutusComponent,
    ContactusComponent,
    TripsComponent,
    IndiaComponent,
    WorldtripsComponent,
    TripsallComponent,
    WorldtripsallComponent,
    IndiatripsallComponent,
    TripsearchingbysubtypeComponent,
    TripsearchingbyseasonComponent,
    TripsearchingbyratingComponent,
    TripsearchingbybetweenpackComponent,
    TripsinglecardComponent,
    IndiatripsearchbysubtypeComponent,
    IndiatripsearchbyseasonComponent,
    IndiatripsearchbyratingComponent,
    IndiatripsearchbybetweenpackComponent,
    IndiasinglecardComponent,
    WorldtripsearchbysubtypeComponent,
    WorldtripsearchbyseasonComponent,
    WorldtripsearchbyratingComponent,
    WorldtripsearchbybetweenpackComponent,
    WorldsinglecardComponent,
    OpeningComponent,
    GalleryComponent,
    BookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularWebStorageModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    NgImageSliderModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTreeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJ-WiPBLTmN1VNiiMm2Dez72VSbMmf0RU'
    })



  ],
  providers: [
      {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '53166985508-rkq81h8kc5va21rndv5eal72rcv739di.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
