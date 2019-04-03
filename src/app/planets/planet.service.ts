import { EventEmitter } from '@angular/core';

import { Planet } from './planet.model';

export class PlanetService {
  planetSelected = new EventEmitter<Planet>();

  private planets: Planet[] = [
    new Planet(
      'Alderaan',
      24,
      364,
      12500,
      'temperate'),
    new Planet(
      'Yavin IV',
      24,
      4818,
      10200,
      'temperate, tropical')
  ];

  constructor() {}

  getPlanets() {
    return this.planets.slice();
  }

  getPlanet(id: number) {
    return this.planets[id];
  }

}
