import { Component, OnInit } from '@angular/core';
import { Planet } from './planet';
import { PlanetService } from './planet.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
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
