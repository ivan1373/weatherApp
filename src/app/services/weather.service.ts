import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeatherByName(cityName: string) {
    return this.http.get<any>(`${this.ROOT_URL}?q=${cityName}&units=metric&appid=bb1bc124d4d663cc7d3a6d9403a42e59`);
  }
}
