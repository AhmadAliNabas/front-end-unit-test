import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosComponent} from './todos.component';
import {TodoService} from "./todo.service";
import {Observable, of} from "rxjs";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;
  let httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(TodoService);
    fixture = TestBed.createComponent(TodosComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should called add', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return new Observable();
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(new Observable());
    component.delete(1);
    expect(spy).toHaveBeenCalled();
  });
});
