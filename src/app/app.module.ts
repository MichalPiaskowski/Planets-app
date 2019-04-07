import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { PlanetItemComponent } from './planets/planet-list/planet-item/planet-item.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetService } from './planets/planet.service';
import { ApiService } from './planets/api.service';



@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetListComponent,
    PlanetDetailsComponent,
    PlanetItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [PlanetService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
