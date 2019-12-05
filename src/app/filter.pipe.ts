import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   
  
  transform(value: any, filterData: any[]): any {
    let finalOutput = [];
    if(!value)
    return finalOutput;

    if(!filterData['branch']){
      let tempArr = []
      let tempLocationCategories = value.filter((e)=>e.dealers_id == filterData['location']);
      let branch = tempLocationCategories[0].branches
      for(let i in branch){
        let tempBranch = branch[i]
          for(let j in tempBranch.categories){
            tempArr.push(tempBranch.categories[j]);
          }
      }
      finalOutput = tempArr;
      return finalOutput;
    }
    else{
      let tempLocationCategories;
      for(let i in value){
        if(value[i].dealers_id == filterData['location']){
          let tempBranch = value[i].branches;
          for(let j in tempBranch){
            if(tempBranch[j].branch_id == filterData['branch']){
              tempLocationCategories = tempBranch[j].categories
            }
          }
        }
      }
      finalOutput = tempLocationCategories;
    }
    return finalOutput;
  }

}
