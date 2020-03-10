import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosComponent} from './todos.component';
import {TodoService} from "./todo.service";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;
  let http: HttpClient;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [
        {provide: HttpClient, useValue: http},
        {provide: TodoService, useValue: service},
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should called add', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return new Observable();
    })
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return of([todos]);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });
});
