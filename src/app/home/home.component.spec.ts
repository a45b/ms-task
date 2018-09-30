import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../app-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { APP_BASE_HREF } from '@angular/common';
import { SearchService } from '../shared/util/search.service';
import { DataService } from '../shared/util/data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class MockSearchService { }
class MockDataService {
  getData() {
    Observable.of([]);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
       ],
      imports: [
        AppMaterialModule,
        RouterTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: SearchService, useClass: MockSearchService },
        {provide: DataService, useClass: MockDataService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be isError is false', async(() => {
    expect(component.isError).not.toBe(true);
  }));

  it('should items to empty', async(() => {
    expect(component.items.length).toEqual(0);
  }));

});
