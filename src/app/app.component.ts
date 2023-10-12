import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './Services/weather-service.service';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp ';


  date: any;
  myweather: any;
  tempprature: number = 0;
  maxtemp: number = 0;
  mintemp: number = 0;
  humidity: number = 0;
  windspeed: number = 0;
  description: string = "";

  units: string = "metric";

  newCityname: string = ""

  constructor(private weatherservice: WeatherServiceService) {
    this.date = new Date;
  }


  searchcity(name: string) {


    console.log(name);
    this.newCityname = name;
    console.log(this.newCityname)

    this.weatherservice.getWeather(this.newCityname, this.units).subscribe({

      next: (res) => {
        console.log(res);

        this.myweather = res;
        console.log(this.myweather);

        this.tempprature = this.myweather.main.temp
        this.maxtemp = this.myweather.main.temp_max
        this.mintemp = this.myweather.main.temp_min
        this.humidity = this.myweather.main.humidity
        this.windspeed = this.myweather.wind.speed
        this.description = this.myweather.weather[0].description

      },

      error: (error) =>
        console.log(error.message),

      complete: () => console.info("API CALLED Sucessfully..........")

    })

  }

  ngOnInit(): void {



  }

}
