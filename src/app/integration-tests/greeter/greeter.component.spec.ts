import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GreeterComponent} from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async(() => { // we configure out testing module here
    // the component template is in a separate file
    // angular needs to compile the template with stylesheet with component implementation

    TestBed.configureTestingModule({
      // we are telling angular compile all the component that are declared here
      declarations: [GreeterComponent]
    })
      .compileComponents();// this method is chained with configureTestingModule


    //Angular needs to access file system which is slow
    //that's why it happens Asynchronously
    // and for this reason we call async
    // async is a utility function provided by angular
  }));

  beforeEach(() => { // we create the component
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // when using webpack which is the standard builder when using angular CLI
  // it bundles template + stylesheet and component code to a single file
  // we don't really need to call compileComponents method
  // and we don't really need two beforeEach method
  // but I thought it would be nice to know.

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
