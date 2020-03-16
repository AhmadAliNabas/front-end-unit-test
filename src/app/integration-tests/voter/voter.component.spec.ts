import {VoterComponent} from './voter.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

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

  it('should render total Votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    // query takes a Predicate which returns true if condition met
    let debugElement = fixture.debugElement.query(By.css('.vote-count'));
    // nativeElement is of type any, we store it in variable and give it Type
    // to leverage the use of intelli-sense

    let nativeElement: HTMLElement = debugElement.nativeElement;

    expect(nativeElement.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upVoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.vote-button'));

    expect(debugElement.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when i click the upvote', () => {
    let button = fixture.debugElement.query(By.css('.vote-up-button'));
    // pass data in eventObj if when clicking we pass data
    button.triggerEventHandler('click', undefined);
    expect(component.totalVotes).toBe(1);
  });

});
