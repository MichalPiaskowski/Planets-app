import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Planet } from '../planet.model';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnDestroy {
  planets: Planet[];
  term: string;
  pagin = 5;
  paginStart = 0;
  paginEnd = this.pagin;
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
  }

  setPagin(pagin: number) {
    this.pagin = pagin;
    this.paginEnd = pagin;
    this.paginStart = this.paginEnd - pagin;
  }

  nextPage() {
    if (this.paginStart < 60 && this.pagin === 5) {
      this.paginStart = this.paginStart + this.pagin;
      this.paginEnd = this.paginEnd + this.pagin;
    } else if (this.paginStart < 60 && this.pagin === 10) {
      this.paginStart = this.paginStart + this.pagin;
      this.paginEnd = this.paginEnd + this.pagin;
    } else if (this.paginStart < 50 && this.pagin === 25) {
      this.paginStart = this.paginStart + this.pagin;
      this.paginEnd = this.paginEnd + this.pagin;
    }
  }

  prevoiusPage() {
    if (this.paginStart >= 5) {
      this.paginStart = this.paginStart - this.pagin;
      this.paginEnd = this.paginEnd - this.pagin;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
