import { Component, OnInit } from '@angular/core';

import { Planet } from '../planet.model';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planets = this.planetService.getPlanets();
  }

}
