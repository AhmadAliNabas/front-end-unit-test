import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {TodosComponent} from './todos.component';
import {TodoService} from "./todo.service";
import {Observable, of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(TodoService);
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  it('should called add', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return new Observable();
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getTodos', () => {
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
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(new Observable());
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should load todos from the server', () => {
    let todoService = TestBed.inject(TodoService);
    spyOn(todoService, 'getTodos').and.returnValue(of([1, 2, 3]));
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  });

  it('should load todos from the server  async', async(() => {
    let todoService = TestBed.inject(TodoService);
    spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    })
  }));

  it('should load todos from the server Promise fakeAsync', fakeAsync(() => {
    let todoService = TestBed.inject(TodoService);
    spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();
    tick();
    expect(component.todos.length).toBe(3);
  }));


});
