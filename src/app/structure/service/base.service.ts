import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {ResourceService} from "./resource.service";


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private subject = new Subject<any>();
  rout: string;
  private userInfo = new Subject<any>();

  constructor(
    private _httpClient: HttpClient,
    private _resourceService: ResourceService
  ) {
  }

  getList(model): any {
    return this._httpClient.post(this._resourceService.getResourceUrl() + this.rout, model, {});
  }


  add(model): any {
    return this._httpClient.post(this._resourceService.getResourceUrl() + this.rout, model, {});
  }

  update(model): any {
    return this._httpClient.post(this._resourceService.getResourceUrl() + this.rout, model, {});
  }

  delete(id): any {
    let params = new HttpParams().set('id', id);
    return this._httpClient.post(this._resourceService.getResourceUrl() + this.rout, {params: params}, {});
  }

  get(id): any {
    let params = new HttpParams().set('id', id);
    return this._httpClient.get(this._resourceService.getResourceUrl() + this.rout  + id, {params: params});
  }

}
