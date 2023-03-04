import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Coin } from '../coin';
import { DataService } from '../data.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  result!: Coin[];
  coinsPrice!: number[];
  coinsName!: string[];
  chart: any = [];

  constructor(private service: DataService) {
    Chart.register(...registerables);
  }

  ngOnInit() {

    this.service.cryptoData().subscribe((res) => {
      this.result = res;

      this.coinsPrice = this.result.map((coins) => coins.price);
      this.coinsName = this.result.map((coins) => coins.name);

      // console.log(this.coinPrice);
      // console.log(this.coinName);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.coinsName,
          datasets: [
            {
              data: this.coinsPrice,
              borderColor: '#3e95cd',
              fill: false,
              label: 'Coin Price',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }
}
