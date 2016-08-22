import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetService } from './planet.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Select a planet</h2>
    <ul class="planets">
      <li *ngFor="let planet of planets"
        [class.selected]="planet === selectedPlanet"
        (click)="onSelect(planet)">
        <span class="badge">{{planet.id}}</span> {{planet.name}}
      </li>
    </ul>
    <planet-detail [planet]="selectedPlanet"></planet-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .planets {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .planets li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .planets li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .planets li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .planets .text {
      position: relative;
      top: -3px;
    }
    .planets .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [PlanetService]
})
export class AppComponent implements OnInit {
  title = 'Planets of the Solar System';
  planets: Planet[];
  selectedPlanet: Planet;
  constructor(private planetService: PlanetService) { }
  getPlanets(): void {
    this.planetService.getPlanets().then(planets => this.planets = planets);
  }
  ngOnInit(): void {
    this.getPlanets();
  }
  onSelect(planet: Planets): void {
    this.selectedPlanet = planet;
  }
}
