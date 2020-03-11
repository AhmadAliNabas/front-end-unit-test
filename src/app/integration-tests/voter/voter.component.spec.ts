import {VoterComponent} from './voter.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;
  beforeEach(() => {
    // ask Angular to create an instance of VoterComponent for us
    // TestBed provides Utility methods
    // when creating Testing we need to provide meta data object
    TestBed.configureTestingModule({
      declarations: [VoterComponent],
    });

    // returns a Fixture
    // Fixture is a generic class
    // Fixture is a wrapper around Voter Instance
    // Where we can access Voter Instance and the template
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement; returns html element which is the root DOM element
    // fixture.debugElement; wrapper around nativeElement

  });

  it('', () => {
  });
});
