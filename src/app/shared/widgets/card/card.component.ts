import { Component, OnInit, Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()label!: string;
  @Input() total!: string;
  @Input() percentage!: string;

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data= [];
  constructor() { }

  
  ngOnInit() {
    this.chartOptions ={
      chart: {
          type: 'area',
          backgroundColor: null,
          borderwidth: 0,
          margin:[2,2,2,2],
          height: 60,
      },
      title: {
          text:null
      },
      subtitle: {
          text:null
      },
      yAxis: {
          labels:{
            enables: false,
          },
          title:{
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
      xAxis: {
        labels:{
          enables: false,
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      tooltip: {
          shared: true,
          outside:true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      legend: {
        enable:false,
      },
      credits: {
          enable: false,
      },
      exporting: {
          enabled: false,
      },
      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          data: this.data
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
     window.dispatchEvent(
      new Event('resize')
     ); 
  }, 300);
   }


}