import {Injectable, isDevMode} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map, finalize} from 'rxjs/operators';
import {Observable, Subject, of} from 'rxjs';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class ResourceService {
  // url properties
  private confUrl: string;
  private resourceUrl: string;
  private apiUrl: string;
  private configUrls: object;
  private subject = new Subject<any>();
  private subjectPrincipal = new Subject<any>();


  constructor(
    private http: HttpClient
  ) {

  }


  getResourceUrl(url?) {
    if (url == undefined || url == null || url == '') {
      return this.resourceUrl;
    } else {
      return this.configUrls[url];
    }
  }

  getApiUrl(url?) {
    if (url == undefined || url == null || url == '') {
      return this.apiUrl;
    } else {
      return this.configUrls[url];
    }
  }


  getResource() {
    this.confUrl = (isDevMode() ? 'assets/config/dev.conf.json' : 'assets/config/prod.conf.json');
    this.http.get(this.confUrl)
      .pipe(map(res => res))
      .subscribe(config => {
        this.resourceUrl = config['resourceUrl'];
        this.apiUrl = config['apiUrl'];
        this.configUrls = config;
        this.subject.next({config: config});
      }, err => {
        console.error('config file not found : ', err);
      });
  }


  getResourceUrlList(): Observable<any> {
    return this.subject.asObservable();
  }

}
