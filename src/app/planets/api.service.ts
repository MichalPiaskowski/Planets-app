import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { PlanetService } from './planet.service';
import { Planet } from './planet.model';

@Injectable()
export class ApiService {

  constructor(private http: Http, private planetService: PlanetService) {}

  apiGetMockData() {
    let planets: Planet[] = [];
    this.http.get('../../assets/mock/mock_planets_1.json')
      .subscribe(
        (response: Response) => {
          planets = planets.concat(response.json().results);
          this.planetService.setPlanets(planets);
        }
      );
  }


  apiGetPlanets() {
    let planets: Planet[] = [];
    for (let i = 1; i < 8; i++) {
    this.http.get(`https://swapi.co/api/planets/?page=${i}`)
      .subscribe(
        (response: Response) => {
            setTimeout(() => {
            planets = planets.concat(response.json().results);
            this.planetService.setPlanets(planets);
            }, 300);
        },
        (error: Response) => {
          console.log('SERWER NIE ODPOWIADA ' + error);
        }
      );
    }
  }
}
