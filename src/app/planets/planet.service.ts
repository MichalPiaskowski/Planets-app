// import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Planet } from './planet.model';

@Injectable()
export class PlanetService {
  planetsChanged = new Subject<Planet[]>();
  // planetSelected = new EventEmitter<Planet>();

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

  setPlanets(planets: Planet[]) {
    this.planets = planets;
    console.log(this.planets);
    this.planetsChanged.next(this.planets.slice());
    console.log(this.planets);
  }

  getPlanets() {
    console.log(this.planets);
    return this.planets.slice();
  }

  getPlanet(id: number) {
    return this.planets[id];
  }

}
