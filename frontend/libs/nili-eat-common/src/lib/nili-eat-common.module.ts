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
const environment: "dev" | "prod" = "dev";

const devApiUrl = "http://localhost:8000/api/v1/";
const prodApiUrl = "http://localhost:8000/api/v1/";

export const apiUrl = (url: string) => {
  return (environment === "dev" ? devApiUrl : prodApiUrl) + url;
}
