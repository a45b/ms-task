import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  private searchSource = new BehaviorSubject<string>('');
  currentSearchText = this.searchSource.asObservable();

  constructor() { }

  changeSearch(message: string) {
    this.searchSource.next(message);
  }

}
