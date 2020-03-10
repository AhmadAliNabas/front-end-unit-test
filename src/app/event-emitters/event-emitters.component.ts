import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-emitters',
  templateUrl: './event-emitters.component.html',
  styleUrls: ['./event-emitters.component.scss']
})
export class EventEmittersComponent implements OnInit {

  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  ngOnInit(): void {
  }

}
