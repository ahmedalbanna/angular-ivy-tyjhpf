import { Component, VERSION } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  cars: Car[];
make: string;
model: string;
miles: number;

  constructor (private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  addCar(){
    const newCar: Car = {make: this.make, model: this.model, miles: this.miles };
    this.transportationService.addCar(newCar);
  
}
}

