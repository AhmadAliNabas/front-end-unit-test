import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        // VoterComponent,
        // NavComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front-end-unit-test'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front-end-unit-test');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('front-end-unit-test');
  });

  it('should have router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });


});
