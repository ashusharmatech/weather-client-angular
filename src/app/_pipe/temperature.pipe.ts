import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'temperaturePipe'})
export class TemperaturePipe implements PipeTransform {
  transform(temp: number) {
    return Math.round((temp - 273.15) * 100) / 100;

  }

}
