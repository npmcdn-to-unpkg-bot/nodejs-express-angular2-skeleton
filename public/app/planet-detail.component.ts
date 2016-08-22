import { Component, Input } from '@angular/core';
import { Planet } from './planet';
@Component({
    selector: 'planet-detail',
    template: `
    <div *ngIf="planet">
      <h2>Some information about {{planet.name}}</h2>
    </div>
  `
})
export class PlanetDetailComponent {
    @Input()
    planet: Planet;
}
