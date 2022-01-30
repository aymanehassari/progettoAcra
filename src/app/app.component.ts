import { Component } from '@angular/core';
import { ChartType, GoogleChartComponent } from 'angular-google-charts';
import {v} from './vaccine.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  anno2000 :any [] = []
  title = 'progettoAcra';
  type = ChartType.GeoChart;  
  data = [  
     ['Angola', 5.0],  
     ['Albania', 36.8],  
     ['Andorra', 42.8],  
     ['Argentina', 18.5],  
     ['Armenia', 16.2]  
  ];  
  columns = ['Country', 'Percentage'];  
  options = {displayMode: 'regions',
    colorAxis: {colors: ['white','orange',]}}; //Definisce le sfumature della mappa  
  width = 500;  
  height = 300;  
  constructor(){
    console.log(v)
    for (const statoAnni of v) {
      let app = [statoAnni.Country, statoAnni[2000]]
      this.anno2000.push(app)
    }
    this.data = this.anno2000
  console.log(this.anno2000)
  }  
  ngOnInit() {}  
}  

