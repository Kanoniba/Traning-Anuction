import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public route: Router) {
    route.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/dashboard') {
          this.pageTitle = '這裡是首頁';
          this.pageDesc = '首頁描述';
        } else if (event.url.startsWith('/stock')) {
          this.pageTitle = '這裡是股票信息';
          this.pageDesc = '股票信息描述';
        }
      });
  }

  ngOnInit() {
  }
}


