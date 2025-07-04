import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-chartcomp',
  templateUrl: './chartcomp.component.html',
  styleUrl: './chartcomp.component.css'
})
export class ChartcompComponent {

  public chartType:ChartType='bar'
  public chartData: ChartConfiguration['data']={
    datasets:[
      {
      data: [45,25,60,30],
      label :'Company Sales',
      backgroundColor: 'pink',
      borderColor:'red',
      borderWidth: 1
      }
    ]
  }
  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins:{
      legend:{
        display: true,
        position: 'top'
      }
    },
    scales:{
      y: {
        beginAtZero: true
      }
    }
  }
}
