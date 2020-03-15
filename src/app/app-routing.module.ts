import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from "./integration-tests/user-details/user-details.component";
import {UsersComponent} from "./empty-components/users/users.component";
import {TodosComponent} from "./integration-tests/todos/todos.component";
import {HomeComponent} from "./empty-components/home/home.component";
import {NotFoundComponent} from "./empty-components/not-found/not-found.component";


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
