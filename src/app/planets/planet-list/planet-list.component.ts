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
    console.log(this.planets);
  }

  setPagin(pagin: number) {
    this.pagin = pagin;
    console.log('pagin ' + this.pagin);
    this.paginEnd = pagin;
    console.log(' pagin end ' + this.paginEnd);
    this.paginStart = this.paginEnd - pagin;
    console.log('pagin start ' + this.paginEnd);
  }
  nextPage() {
    if (this.paginStart <= 60) {
      this.paginStart = this.paginStart + this.pagin;
      console.log('pagin start ' + this.paginStart);
      this.paginEnd = this.paginEnd + this.pagin;
      console.log('pagin end ' + this.paginEnd);
    }
  }

  prevoiusPage() {
    if (this.paginStart >= 5) {
      this.paginStart = this.paginStart - this.pagin;
      console.log('pagin start ' + this.paginStart);
      this.paginEnd = this.paginEnd - this.pagin;
      console.log('pagin end ' + this.paginEnd);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
