import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'register', pathMatch: 'full', component: RegistrationFormComponent }
    ])
  ],
  declarations: [RegistrationFormComponent]
})
export class RegistrationFormModule { }
