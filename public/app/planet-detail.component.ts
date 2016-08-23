import { Component, Input } from '@angular/core';
import { Planet } from './planet';
@Component({
    selector: 'planet-detail',
    styleUrls: ['app/planet-detail.component.css'],
    templateUrl: 'app/planet-detail.component.html',
})
export class PlanetDetailComponent {
    @Input()
    planet: Planet;
}
