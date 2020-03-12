import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsComponent} from './user-details.component';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { // Mock
            queryParams: of({id: 0}),
            params: of({id: 0})
          }
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });


  it('should redirect the user to the users page after saving', () => {
    let spy = spyOn(router, 'navigate');
    component.save();
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate the user to the not found page when passing invalid user id', () => {
    let spy = spyOn(router, 'navigate');
    let route: ActivatedRoute = TestBed.inject(ActivatedRoute);
    route.params = of({id: 0});
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(['not-found']);
  })

});
