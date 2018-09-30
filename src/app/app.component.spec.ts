import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './shared/util/search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

class MockSearchService { }

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: SearchService, useClass: MockSearchService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have as heading1 Company heading', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading1).toEqual('Company heading');
  }));

  it('should render heading1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.heading1').textContent).toContain('Company heading');
  }));

  it(`should have as heading2 'Heading'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading2).toEqual('Heading');
  }));

  it('should render heading2', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.heading2').textContent).toContain('Heading');
  }));

  it(`should have as heading3 'Heading 2'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading3).toEqual('Heading 2');
  }));

});
