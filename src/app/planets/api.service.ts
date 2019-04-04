import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { PlanetService } from './planet.service';
import { Planet } from './planet.model';

@Injectable()
export class ApiService {
  constructor(private http: Http, private planetService: PlanetService) {}

  apiGetPlanets() {
    this.http.get('https://swapi.co/api/planets/')
      .subscribe(
        (response: Response) => {
            const planets: Planet[] = response.json().results;
            console.log(planets);
            this.planetService.setPlanets(planets);
        }
      );
  }
}
