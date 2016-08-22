import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { PlanetDetailComponent } from './planet-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PlanetDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
