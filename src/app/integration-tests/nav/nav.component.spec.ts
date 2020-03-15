import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavComponent} from './nav.component';
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have a link to todos page', () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    // <a href="/todos">
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);
  });
});
