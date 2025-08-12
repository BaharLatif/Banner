
// import { Routes } from '@angular/router';
// import { HomePageComponent } from './home/home-page/home-page.component';

//  export const routes: Routes = [
//   { path: '', component: HomePageComponent },
// ];

import { Routes } from '@angular/router';
 import { HomePageComponent } from './home/home-page/home-page.component';

export const routes: Routes = [
 { path: '', component: HomePageComponent },
  { path: 'summer-sale', loadComponent: () => import('./home/home-page/home-page.component').then(m => m.HomePageComponent) }, 
 
 ];
