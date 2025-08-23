
// import { Routes } from '@angular/router';
//  import { HomePageComponent } from './home/home-page/home-page.component';

//  export const routes: Routes = [
//     { path: '', component: HomePageComponent },
//     { path: 'summer-sale', loadComponent: () =>
//         import('./home/home-page/home-page.component').then(m => m.HomePageComponent) },
//     { path: 'category/:slug', component: HomePageComponent },  
//   ];


import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'category/:slug',
    loadComponent: () =>
      import('./home/category-page/category-page.component')
        .then(m => m.CategoryPageComponent)
  },
  { path: '**', redirectTo: '' }
];
