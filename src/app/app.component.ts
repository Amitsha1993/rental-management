import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchdataService } from './services/fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rental-management';
  breadcrumbList =[];
  menu = [
    {path:'./home',name:'Home'},
    {path:'./landing',name:'Equipment'},
  { path: './subcategory', name:'Details'}
    
  ];
  enableBreadCrumb: boolean = false;
  constructor(private _router: Router,private fetchdataService:FetchdataService) { 
    
    this.fetchdataService.myData.subscribe((data) => {
      console.log("dddddddd",data);
      if(data.length)
        this.enableBreadCrumb = true
    });
  }

  ngOnInit() {
    this.listenRouting();
  }

  // function to listen breadcrumb
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, targetr: any,target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        targetr = this.menu;
        //this.breadcrumbList.length = 0;
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          target = targetr.find(page => page.path.slice(2) === router);
          if(!target) {
            return
          }
          if (!this.breadcrumbList.some(e => e.name === target.name)) {
            this.breadcrumbList.push({
              name: target.name,
              path:  target.path
            });
          }
        });
      }
    });
  }
}
