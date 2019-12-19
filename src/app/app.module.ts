import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeDetailsComponent } from "./home-details/home-details.component";
import { HeaderComponent } from "./components/header/header.component";
import { StatusBarComponent } from "./common/components/status-bar/status-bar.component";
import { SubProgressBarComponent } from "./common/components/sub-progress-bar/sub-progress-bar.component";
import { HomeConstructionComponent } from "./home-details/components/home-construction/home-construction.component";
import { HomeProtectionComponent } from "./home-protection/home-protection.component";
import { AboutMeComponent } from "./details/about-me/about-me.component";
import { DiscountsComponent } from "./details/discounts/discounts.component";
import { DetailsComponent } from "./details/details.component";
import { AddressComponent } from './components/google/address/address.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeDetailsService } from './home-details/home-details.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeDetailsComponent,
    HeaderComponent,
    StatusBarComponent,
    SubProgressBarComponent,
    HomeConstructionComponent,
    HomeProtectionComponent,
    AboutMeComponent,
    DiscountsComponent,
    DetailsComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,
    AgmCoreModule.forRoot({
      language: 'en',
      apiKey: 'AIzaSyD-gY0V_jFUP3kaeq429UVXGYP1O-R6_zU',
      libraries: ['geometry', 'places']
    }),
    HttpClientModule,
  ],
  providers: [HomeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
