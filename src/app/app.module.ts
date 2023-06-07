import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponentComponent } from './movie-details-component/movie-details-component.component';
import { MovielistComponentComponent } from './movielist-component/movielist-component.component';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HoverPopupComponent } from './hover-popup/hover-popup.component';
import { AdvFilterComponent } from './adv-filter/adv-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ServiceHelper } from './Service/serviceHelper';
import { ServiceHelperService } from './Service/service-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponentComponent,
    MovielistComponentComponent,
    FilterPopupComponent,
    LandingPageComponent,
    HoverPopupComponent,
    AdvFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    MatTooltipModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ServiceHelper, {
      delay: 1000,
    }),
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
