import { Component, OnInit } from '@angular/core';

// import { Planet } from './planet.model';
import { PlanetService } from './planet.service';
import { ApiService } from './api.service';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  providers: [PlanetService]
})
export class PlanetsComponent implements OnInit {
  adventureStarted = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.apiGetPlanets();
  }

  startAdventure() {
    this.adventureStarted = true;
  }

}
