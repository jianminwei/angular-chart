import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  chartRendered:boolean = false;
  chart: any = [];

  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
    this.chartRendered = true;
  }

  createChart() {
    this.chart = new Chart('canvas',
      {
        type: 'pie',
        data: this.oilData,
        options: {
          aspectRatio:2.5
        }
      }
    );
  }

  private oilData = {
    labels: [
      "Saudi Arabia",
      "Russia",
      "Iraq",
      "United Arab Emirates",
      "Canada"
    ],
    datasets: [
      {
        data: [133.3, 86.2, 52.2, 51.2, 50.2],
        backgroundColor: [
          "#FF6384",
          "#63FF84",
          "#84FF63",
          "#8463FF",
          "#6384FF"
        ]
      }]
  };

}
