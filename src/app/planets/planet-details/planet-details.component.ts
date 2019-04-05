import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Planet } from '../planet.model';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planet: Planet;
  name: string;

  constructor(private planetService: PlanetService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    console.log('poza params ' + this.name);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          console.log('planet details name przed funckją ' + this.name);
          this.planet = this.planetService.getPlanet(this.name);
          console.log('planet details name po funkcji ' + this.name);
        }
      );
  }

}
