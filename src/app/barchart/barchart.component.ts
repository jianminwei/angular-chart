import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '../data.service';
import { Enrollment } from '../enrollment';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  result!: Enrollment[];
  counts!: number[];
  years!: number[];
  chart: any = [];

  constructor(private service: DataService) {
    Chart.register(...registerables);
  }

  ngOnInit() {

    this.service.enrollmentData().subscribe((res) => {
      this.result = res;

      this.counts = this.result.map((enrollment) => enrollment.count);
      this.years = this.result.map((enrollment) => enrollment.year);

      // console.log(this.result);
      // console.log(this.counts);
      // console.log(this.years);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.years,
          datasets: [
            {
              data: this.counts,
              borderColor: '#3e95cd',
              // fill: false,
              label: 'College Enrollment (Unit: student)',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 2,
            },
          ],
        },
      });
    });
  }
}
