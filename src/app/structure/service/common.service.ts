import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {ToastrService} from 'ngx-toastr';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class  CommonService {

  constructor(private http: HttpClient, private toasts : ToastrService) {
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
