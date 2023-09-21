import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit {

  ngOnInit(): void {
    const options = this.getChartOption()
    Highcharts.chart("chart-container", options)
  }

  private getChartOption(): any {
    return {
      chart: {
        type: 'bar'
      },
      title: {
        text: null
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [
        {
          name: 'Service1',
          data: [5, 15, 10, 20, 15, 1, 2, 12, 13, 20, 11, 18]
        }]
    }
  }

}
