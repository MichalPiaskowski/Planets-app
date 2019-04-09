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

  // sortPlanets() {
  //   return array.sort((i, j): number => {
  //     let x = i[key];
  //     let y = j[key];

  //   })
  // }

  getPlanets() {
    this.planets.sort((leftSide, rightSide): number => {
      if (leftSide.name < rightSide.name) { return -1; }
      if (leftSide.name > rightSide.name) { return 1; }
      return 0;
    });
    console.log(this.planets);
    this.planets.slice();
    return this.planets.slice();
  }

  getPlanet(name: string) {
    console.log('w metodzie getPlanet ' + name);
    return this.planets.find(planet => planet.name === name);
  }

}
