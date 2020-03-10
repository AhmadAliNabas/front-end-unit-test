import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';
import {HttpClient} from "@angular/common/http";

describe('TodoService', () => {
  let service: TodoService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // reference the new instance of formBuilder from above
        {provide: HttpClient, useValue: httpClient}
      ]
    });

    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
