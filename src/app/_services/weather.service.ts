import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class WeatherService {
  private API_URL = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getWeather(city: string) {
        return this.http.post<any>(`${this.API_URL}/weather/`, { city })
            .pipe(map(data => {
                return data;
            }));
    }
}
