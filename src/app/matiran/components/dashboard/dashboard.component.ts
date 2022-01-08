import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../../../structure/service/resource.service";
import {DashboardService} from "../../services/login-service/dashboard.service";
import {ChartOptions, Color} from "chart.js";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tfa: any = {};
  authcode: string = "";
  errorMessage: string = null;

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private resourceService: ResourceService,
              private dashboardService: DashboardService) {

  }

  ngOnInit() {
  }

  getList():void
  {
    this.dashboardService.getlist().subscribe((info: any) => {
      console.log(info);
    })
  }

}
