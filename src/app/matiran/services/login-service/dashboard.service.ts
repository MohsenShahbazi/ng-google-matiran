import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import {BaseService} from "../../../structure/service/base.service";
import {ResourceService} from "../../../structure/service/resource.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {


  constructor(
    private _http: HttpClient,
    private _resource: ResourceService,
    private resourceService: ResourceService,
  ) {
    super(_http, _resource);
  }




  getlist() {
    return this._http.get(this._resource.getApiUrl() , {});
  }
}
