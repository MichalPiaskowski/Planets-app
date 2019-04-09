import { Injectable } from '@angular/core';

import { Planet } from './planet.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlanetService {
  planetsChanged = new BehaviorSubject<Planet[]>([]);
  planets: Planet[];


  setPlanets(planets: Planet[]) {
    this.planets = planets;
    this.planetsChanged.next(this.planets.slice());
    return planets;
  }

  getPlanets() {
    this.planets.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) { return -1; }
      if (leftSide.name > rightSide.name) { return 1; }
      return 0;
    });
    this.planets.slice();
    return this.planets.slice();
  }

  getPlanet(name: string) {
    return this.planets.find(planet => planet.name === name);
  }

}
