// import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';

import { Planet } from './planet.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlanetService {
  // planetsChanged = new Subject<Planet[]>();
  planetsChanged = new BehaviorSubject<Planet[]>([]);


  planets: Planet[];

  setPlanets(planets: Planet[]) {
    this.planets = planets;
    this.planetsChanged.next(this.planets.slice());
    // console.log(planets);
    return planets;
  }

  getPlanets() {
    // console.log(this.planets.slice());
    return this.planets.slice();
  }

  getPlanet(name: string) {
    console.log('w metodzie getPlanet ' + name);
    return this.planets.find(planet => planet.name === name);
  }

}
