import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { PlanetService } from './planet.service';
import { Planet } from './planet.model';

@Injectable()
export class ApiService {
    // urls = [];

  constructor(private http: Http, private planetService: PlanetService) {}

  // apiGetUrls() {
  //   for (let i = 0; i < 8; i++) {
  //    this.urls = this.urls.concat(`https://swapi.co/api/planets/?page=${i}`);
  //   }
  //   console.log(this.urls);
  //   return this.urls;
  // }

  // apiGetPlanets() {
  //   let planets: Planet[] = [];
  //   for (let i = 1; i < 8; i++) {
  //   this.http.get(`https://swapi.co/api/planets/?page=${i}`)
  //     .map(
  //       (response: Response) => {
  //       planets = planets.concat(response.json().results);
  //       // console.log(planets);
  //       return planets;
  //     }).subscribe(
  //       (planets: Planet[]) => {
  //       this.planetService.setPlanets(planets);
  //       }
  //     );
  //   }
  // }


// DOKOŃCZ DODAWANIE DUMMY DATA DO POBIERABIA Z API!!!!

  apiGetPlanets() {
    let planets: Planet[] = [];
    for (let i = 1; i < 8; i++) {
    this.http.get(`https://swapi.co/api/planets/?page=${i}`)
      .subscribe(
        (response: Response) => {
            setTimeout(() => {
            planets = planets.concat(response.json().results);
            this.planetService.setPlanets(planets);
            }, 500);
        },
        (error: Response) => {
          console.log('ups coś poszło nie tak' + error);
          this.http.get(`./assets/mock/mock_planet.json`).
          map((response: Response) => {
                  planets = planets.concat(response.json().results);
                  // console.log(planets);
                  return planets;
                }).subscribe(
                  (planets: Planet[]) => {
                  this.planetService.setPlanets(planets);
                  }
          );
        }
      )}
  }
}
