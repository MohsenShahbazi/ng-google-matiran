import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: '<router-outlet></router-outlet>'
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
