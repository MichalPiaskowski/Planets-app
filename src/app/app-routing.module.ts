import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets', component: PlanetsComponent, children: [
    { path: 'planet-list', component: PlanetListComponent },
    { path: ':id', component: PlanetDetailsComponent },
  ]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}
