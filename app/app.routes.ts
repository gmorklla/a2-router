// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DogListComponent } from './dog-list.component';

// Route Configuration
export const routes: Routes = [
  { path: 'dogs', component: DogListComponent },
  { path: 'inicio', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);