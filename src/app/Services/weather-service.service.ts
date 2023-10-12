import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpp :HttpClient) { }

  getWeather(city:string,units:string){

    
    console.log("CITYNAME IS =  "+city);
    console.log("Unit is "+units)
    return this.httpp.get('https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=34f644d57197949eeb5c74f4c6b346ab&units='+units)
  }
}
