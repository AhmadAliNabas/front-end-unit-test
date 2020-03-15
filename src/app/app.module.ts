import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ComputeComponent} from "./unit-tests/compute/compute.component";
import {CurrencyComponent} from "./unit-tests/currency/currency.component";
import {PostComponent} from "./unit-tests/post/post.component";
import {VoteComponent} from "./unit-tests/vote/vote.component";
import {TodosComponent} from "./unit-tests/todos/todos.component";
import {TodoFormComponent} from "./unit-tests/todo-form/todo-form.component";
import {GreetComponent} from "./unit-tests/greet/greet.component";
import {EventEmittersComponent} from "./unit-tests/event-emitters/event-emitters.component";
import {GreeterComponent} from './integration-tests/greeter/greeter.component';
import {UserDetailsComponent} from './integration-tests/user-details/user-details.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {VoterComponent} from "./integration-tests/voter/voter.component";

@NgModule({
  declarations: [
    AppComponent,
    ComputeComponent,
    CurrencyComponent,
    EventEmittersComponent,
    GreetComponent,
    TodoFormComponent,
    TodosComponent,
    VoteComponent,
    PostComponent,
    VoterComponent,
    GreeterComponent,
    UserDetailsComponent,
    UsersComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
