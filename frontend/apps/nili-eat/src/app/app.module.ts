import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NiliEatCommonModule } from '@frontend/nili-eat-common';
import { HomePageModule } from '@frontend/home-page';
import { LoginFormModule } from '@frontend/login-form';
import { RegistrationFormModule } from '@frontend/registration-form';
import { RestaurantRegistrationFormModule } from '@frontend/restaurant-registration-form';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    RouterModule.forRoot([], { initialNavigation: 'enabled', useHash: true }),

    NiliEatCommonModule,
    HomePageModule, LoginFormModule,
    RegistrationFormModule, RestaurantRegistrationFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
