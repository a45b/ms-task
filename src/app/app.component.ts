import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { pluck, map, filter, shareReplay } from 'rxjs/operators';

import { SearchService } from './shared/util/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidenavMode: string = 'side';
  isSmallScreen: boolean = false;

  heading1: string = 'Company heading';
  heading2: string = 'Heading';
  heading3: string = 'Heading 2';

  searchControl: FormControl = new FormControl('');
  showSearch: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private _breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.onResized();

    this.searchControl.valueChanges
    .subscribe(term => {
      this.searchService.changeSearch(term);
    });

  }

  onResized() {
    this._breakpointObserver
    .observe(['(max-width: 901px)'])
    .pipe(pluck('matches'))
    .subscribe((m: boolean) => {
      this.isSmallScreen = m;
      this.sidenavMode = !m ? 'side' : 'over';
    });
  }

  onActivate(event: any) {
    this.showSearch = (event.showSearch === true) ? true : false;
  }
}
