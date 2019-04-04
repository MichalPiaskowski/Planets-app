import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


import { Planet } from '../planet.model';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[];
  subscription: Subscription;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.subscription = this.planetService.planetsChanged
      .subscribe(
        (planets: Planet[]) => {
          this.planets = planets;
        }
      );
    this.planets = this.planetService.getPlanets();
    console.log(this.planets);
  }


}
