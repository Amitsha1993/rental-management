import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from 'src/app/services/fetchdata.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
subCategory:Array<any>;
  constructor(private route: ActivatedRoute,private fetchdataService:FetchdataService) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.subCategory = this.fetchdataService.getSubCategoryData(id)
      });
   }

  ngOnInit() {
  }

}
