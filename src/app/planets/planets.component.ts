import { Component, OnInit } from '@angular/core';

import { PlanetService } from './planet.service';
import { ApiService } from './api.service';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  adventureStarted = false;
  startAnimation = false;
  showMockData = false;

  constructor(private apiService: ApiService, private planetService: PlanetService) {}

  ngOnInit() {
    this.apiService.apiGetPlanets();
  }

  startAdventure() {
    this.startAnimation = true;
    if (this.planetService.planets !== undefined) {
      console.log('pobrane z serwera');
      setTimeout(() => { this.adventureStarted = true; }, 4000);
    } else {
      console.log('pobrane lokalnie');
      this.apiService.apiGetMockData();
        setTimeout(() => {
          this.adventureStarted = true;
        }, 4000);
      }
    }
  }


