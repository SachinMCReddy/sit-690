import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class NiliEatCommonModule { }


// const environment: "dev" | "prod" = "prod";
const environment = () => {
  return window.location.href.indexOf("://eat.nili.af/app/#/") > -1 ? "prod" : "dev";
}

const devApiUrl = "http://localhost:8000/api/v1/";
const prodApiUrl = "http://eat.nili.af/api/v1/";

export const apiUrl = (url: string) => {
  return (environment() === "dev" ? devApiUrl : prodApiUrl) + url;
}
