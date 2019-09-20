import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cityForm: FormGroup;
  data: any[];

  constructor(private fb: FormBuilder,
    private wService: WeatherService) { }

  ngOnInit() {
    this.cityForm = this.fb.group({
      cityName: ['', [
        Validators.required,
      ]]
    })
  }

  get f() { return this.cityForm.controls; }

  getWeather() {
    this.wService.getWeatherByName(this.f.cityName.value).subscribe(
      data => this.data = data
    )
  }

}
