import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { PLANETS } from './planet-data';
@Injectable()
export class PlanetService {
    getPlanets(): Promise<Planet[]> {
        return Promise.resolve(PLANETS);
    }
}
