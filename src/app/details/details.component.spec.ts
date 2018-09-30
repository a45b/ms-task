import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { DataService } from '../shared/util/data.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class MockDataService {
  getDataById() {    
    return Observable.of([
      {
        "_id": "5adf6c25629ee80ffb918c88",
        "index": 0,
        "guid": "2d10473c-f394-44f0-8c68-9e13fa57dfe0",
        "isFavourite": false,
        "title": "Becker Watson",
        "company": "SPEEDBOLT",
        "info": "Aliquip in fugiat sit ut laboris est quis ut.",
        "description": "Tempor Lorem ipsum adipisicing voluptate est ad sit fugiat ullamco elit voluptate id tempor. Non nisi voluptate amet eu eu exercitation cupidatat anim cillum fugiat veniam est anim. In culpa qui sint velit tempor consequat amet duis duis fugiat amet exercitation magna. Exercitation quis sunt nostrud eu. Commodo laboris commodo fugiat id laboris quis cupidatat veniam cupidatat eiusmod mollit irure.\r\nMagna eu sint irure reprehenderit dolor. Eu incididunt adipisicing esse fugiat id nostrud commodo. Nisi laborum enim dolor laboris. Anim nisi esse ut pariatur mollit veniam deserunt.\r\n"
      }
    ]);
  }  
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [
        AppMaterialModule,
        RouterTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},        
        {provide: DataService, useClass: MockDataService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be isError is false', async(() => {    
    expect(component.isError).not.toBe(true);    
  }));

  it('should itemDetails should be Becker Watson', async(() => {        
    fixture.detectChanges();
    expect(component.itemDetails[0].title).toEqual('Becker Watson');    
  }));

  afterEach(() => { 
    component = null;
    fixture = null;
  });

});
