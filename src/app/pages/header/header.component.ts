import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FetchdataService } from 'src/app/services/fetchdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() headerselection = new EventEmitter<any>()
data:any;
enableSelector:boolean = false;
branchObj = {
  enableBranch: false,
  branchIndex:''
}
  constructor(private fetchdataService:FetchdataService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchdataService.getHeaderData().subscribe(data=>{
      this.data = data.data.locations;
    })
  }
  //on click of select location enabling dropdown
  enableDropDown(){
    this.enableSelector = !this.enableSelector;
  }

  // on mouse hover show branches
  showBranches(index){
    this.branchObj.enableBranch = true;
    this.branchObj.branchIndex = index;
  }

//to select location and update through behaviour subject to respective components
  select(location ='',branch = ''){
    let tempObj = {
      'location': location,
      'branch': branch,
    }
    this.fetchdataService.updateData(tempObj);
    this.refresh();
  }

  refresh(){
    this.enableSelector = false;
    this.branchObj.enableBranch  = false;

  }
}
