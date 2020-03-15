import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo);
  }

  getTodos(): Observable<any> {
    return this.http.get('...');
  }

  getTodosPromise(): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      resolve();
    }))
  }

  delete(id) {
    return this.http.delete('...');
  }
}
