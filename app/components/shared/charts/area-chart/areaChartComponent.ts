import {Component} from "@angular/core";
import { ChartsModule } from 'ng2-charts';
import { IncomeService } from "./../../../../services/incomeService";

@Component({
    selector:"area-chart",
     styles: [`
      chart {
        display: block;
      }
    `],
    template:`<div style="display: block">
  <canvas baseChart
          [data]="polarAreaChartData"
          [labels]="polarAreaChartLabels"
          [legend]="polarAreaLegend"
          [chartType]="polarAreaChartType"
          (chartHover)="chartHovered($event)"
          (chartClick)="chartClicked($event)"></canvas>
</div>`
})
export class AreaChartComponent {
  private incomeGetCatData: any;
  constructor(private incomeCatSvc: IncomeService){
    // this.incomeGetCatData  = this.incomeCatSvc.getCatData();
    // console.log("this.incomeGetCatData" + this.incomeGetCatData);
  }
  // PolarArea
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}