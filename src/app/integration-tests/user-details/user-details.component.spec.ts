import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsComponent} from './user-details.component';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable, of} from "rxjs";

class RouterStub {
  navigate(params) {

  }
}

class ActiveRoutingStub {
  params: Observable<Params>;
}

xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        RouterTestingModule,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActiveRoutingStub},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  })


  it('should navigate the user to the not found page when passing invalid user id', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    let route: ActiveRoutingStub = TestBed.inject(ActivatedRoute);
    let param: Params = {id: 0};
    route.params = of(param);
    expect(spy).toHaveBeenCalledWith(['not-found']);
  })
});
