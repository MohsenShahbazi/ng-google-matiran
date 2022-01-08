import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ResourceService} from "../structure/service/resource.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ticket-challenge';

  constructor(public translate: TranslateService,
              private resourceService: ResourceService) {
    this.translate.addLangs(['fa']);
    this.translate.setDefaultLang('fa');
    this.translate.use('fa');
  }

  ngOnInit() {
    this.resourceService.getResource();
  }
}
