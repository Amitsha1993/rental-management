import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'; 

import { BehaviorSubject } from 'rxjs';
import { FilterPipe } from '../filter.pipe';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
  data:any;
  public myData = new BehaviorSubject([]);
  baseUrl:string = '../../../assets/catalog.json'
  equipmentData: any;
  constructor(public http:HttpClient,private filterPipe:FilterPipe) {
    this.getHeaderData().subscribe(data=>{
      this.data = data.data.locations;
    })
   }
  getHeaderData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
                    .pipe(catchError(this.errorHandler));
  }
 
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Oops!! Server error');
  }

  //emit event when selection change
  updateData(data): void { 
    this.equipmentData =this.filterPipe.transform(this.data,data) ;
    this.myData.next(this.equipmentData);
  }

  getSubCategoryData(id){
    return this.equipmentData[id].subcategories
  }
}
