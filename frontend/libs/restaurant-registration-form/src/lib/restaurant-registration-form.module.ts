import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantRegistrationFormComponent } from './restaurant-registration-form/restaurant-registration-form.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'new-restaurant', pathMatch: 'full', component: RestaurantRegistrationFormComponent }
    ])
  ],
  declarations: [RestaurantRegistrationFormComponent]
})
export class RestaurantRegistrationFormModule { }
