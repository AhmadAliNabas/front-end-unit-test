import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComputeComponent} from './compute/compute.component';
import {CurrencyComponent} from './currency/currency.component';
import {EventEmittersComponent} from './event-emitters/event-emitters.component';
import {GreetComponent} from './greet/greet.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodosComponent} from './todos/todos.component';
import {VoteComponent} from './vote/vote.component';
import {PostComponent} from './post/post.component';

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
    PostComponent
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
