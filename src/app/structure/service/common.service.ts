import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {ToastrService} from 'ngx-toastr';
import *as moment from "jalali-moment";
@Injectable(
  {
    providedIn: 'root',
  }
)
export class  CommonService {
  timoutTime : number = 30000;

  config: any = {
    format: "jYYYY-jMM-jDD",
    showMultipleYearsNavigation : true
  };

  config_time : any = {
    format : "jYYYY-jMM-jDD hh:mm",
    showMultipleYearsNavigation : true
  };

  config_time_TwentyFour : any = {
    format : "jYYYY-jMM-jDD HH:mm",
    showMultipleYearsNavigation : true,
    showTwentyFourHours:true
  };

  constructor(private http: HttpClient, private toasts : ToastrService) {
  }


  convertDateTime(dateTime: any, dateFormat: string) {
    if(dateTime !== null){
      let jalaliDate = "";
      try {
        if (typeof dateTime == "object") {
          var date = new Date(dateTime);
          date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000 + 16200000);
          jalaliDate = moment(date).locale('fa').format(dateFormat);
        } else if (typeof dateTime == "number" || typeof dateTime == "string") {
          var date = new Date(dateTime);
          date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000 + 16200000);
          jalaliDate = moment(date).locale('fa').format(dateFormat);
        }
      } catch (ex) {
        return dateTime;
      }
      return jalaliDate;
    }
  }

  convertDateTimeToLong(dateTime: any, dateFormat: string) {
    if(dateTime !== null){
      let jalaliDate = 0;
      let time = null;
      if (typeof dateTime != "object") {
        time = moment.from(dateTime, "fa", dateFormat).format(dateFormat);
      }
      else {
        time = moment.from(dateTime, dateFormat).format(dateFormat);
      }
      try {
        jalaliDate = moment(time , dateFormat).unix() * 1000;
      } catch {
        return dateTime;
      }
      return jalaliDate;
    }
  }

  convertDashToSlashInDate(input) {
    let text = "";
    let reg = /-/gi
    if (typeof input == "string") {
      text = input.replace(reg, '/');
    } else if (typeof input != "object") {
      let time = moment(input).locale('fa').format("jYYYY-jMM-jDD");
      text = time.replace(reg, '/');
    }
    return text;
  }

  isShowLoadingBar: boolean = false;


  showSuccessMessage(message: string , title: string ):void {
    this.toasts.success(message,title);
  }

  showErrorMessage(message: string , title: string ):void {
    this.toasts.error(message,title);
  }

  showLoadingBar(isShow: boolean) {
    this.isShowLoadingBar = isShow;
  }
}
