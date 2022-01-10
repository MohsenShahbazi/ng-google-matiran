import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../../../structure/service/resource.service";
import {DashboardService} from "../../services/login-service/dashboard.service";
import {CommonService} from "../../../structure/service/common.service";
import {JDATE_TIME_WITH_SLASH} from "../../../structure/constant/dateFormat.constant";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: any;
  optionExample: any;
  options2: any;
  tfa: any = {};
  authcode: string = "";
  errorMessage: string = null;
  list: Array<any>;

  constructor(private resourceService: ResourceService,
              private commonService: CommonService,
              private dashboardService: DashboardService) {


  }

  ngOnInit() {
    this.resourceService.getResourceUrlList().subscribe(() => {
      this.getList();
    });


  }

  getList(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];
    this.options = {
      legend: {
        data: ['خرید', 'فروش'],
        align: 'right',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'خرید',
          type: 'bar',
          data: data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'فروش',
          type: 'bar',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
    this.optionExample = {
      legend: {
        data: ['خرید', 'فروش'],
        align: 'right',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'خرید',
          type: 'pie',
          data: data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'فروش',
          type: 'pie',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
    this.dashboardService.getlist().subscribe((info: any) => {
      //cast object to list
      this.list = Object.keys(info).map((key) => [key, info[key]]);


      for (let i = 0; i < this.list.length; i++) {
        //for (let k = 0; k < this.list[0][1].length; k++) {
          //xAxisData.push(this.commonService.convertDateTime(this.list[0][1][i]['timestamp'], JDATE_TIME_WITH_SLASH));
          if (this.list[0][1][i]['side'] == 'sell')
            data1.push(this.list[0][1][i]['price']);
          if (this.list[0][1][i]['side'] == 'buy')
            data2.push(this.list[0][1][i]['price']);
       // }

      }
    })
  }

}
