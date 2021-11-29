import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { TimeStampConfiguration } from '../constant/items-constant';

@Injectable({
  providedIn: 'root'
})
export class ItemsUtilityService {

  constructor() { }
  filterItemDataBasedOnTimeIntervalConfiguration(item: any) {
    let startDate = moment();
      let timeDifference = moment(startDate).diff(item, 'seconds');
      if (timeDifference <= TimeStampConfiguration) {
       return true;
      }else{
        return false;
      }
  }
}
