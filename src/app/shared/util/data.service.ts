import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { config } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(config.dataUrl, httpOptions);
  }

  getDataById(id: string):  Observable<any> {
    return this.http.get(config.dataUrl, httpOptions)
    .map((itemList: any[]) => {
      return (itemList.filter((res) => res._id === id));
    }).catch((error: Response) => {
      return Observable.throw(error);
    });
  }

}
