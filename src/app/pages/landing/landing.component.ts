import { Component, OnInit, Input } from '@angular/core';
import { FetchdataService } from 'src/app/services/fetchdata.service';
import { FilterPipe } from 'src/app/filter.pipe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
public equipmentData:any;
data:any;
  constructor(private fetchdataService:FetchdataService,private _router: Router) {
   // subscribing beahviour subject
    this.fetchdataService.myData.subscribe((data) => {
      this.equipmentData = data;
    });
  
   }
   openSubCategory(id){
     this._router.navigate(['subcategory', id]);
   }
  ngOnInit() {}

}
