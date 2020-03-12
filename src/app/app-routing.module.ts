import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from "./integration-tests/user-details/user-details.component";
import {UsersComponent} from "./users/users.component";
import {TodosComponent} from "./unit-tests/todos/todos.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";


export const routes: Routes = [
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
