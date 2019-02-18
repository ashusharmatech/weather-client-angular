import {Component, Input, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../_models';
import {AlertService, WeatherService} from '../_services';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  username: string;
  data: JSON;
  showSpinner: boolean;

  constructor(private formBuilder: FormBuilder,
              private weatherService: WeatherService,
              private alertService: AlertService) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      city: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get hf() {
    return this.homeForm.controls;
  }


  onSubmit() {
    this.showSpinner = true;

    this.weatherService.getWeather(this.hf.city.value)
      .pipe(first())
      .subscribe(
        data => {
          this.data = data;
        },
        error => {
          this.alertService.error(error);
        });

    this.showSpinner = false;
  }

}
