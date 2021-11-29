import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemState } from '../models/items-models';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {
  environment: any;
  constructor(private httpClient: HttpClient,@Inject('environment') environment: any) { 
    this.environment = environment;
  }
  getStoryData(id: number): Observable<ItemState> {
    return this.httpClient.get<any>(`${this.environment.baseUrl}/item/${id}.json?print=pretty`);
  }
  getTopStoriesData(): Observable<ItemState> {
    return this.httpClient.get<any>(`${this.environment.baseUrl}/topstories.json?print=pretty`);
  }
  
}
