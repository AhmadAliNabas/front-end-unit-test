import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventEmittersComponent} from './event-emitters.component';

describe('EventEmittersComponent', () => {
  let component: EventEmittersComponent;
  let fixture: ComponentFixture<EventEmittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventEmittersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe((tv => totalVotes = tv));
    component.upVote();
    expect(totalVotes).toBe(1);
  });
});
