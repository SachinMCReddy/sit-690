import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageService } from './home-page.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePageComponent }
    ])
  ],
  providers: [
    HomePageService
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
