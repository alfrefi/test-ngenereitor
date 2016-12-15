import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoCmp } from './todo/components/todo-cmp';
import { TodoService } from './todo/services/todo-service';
import { CursoComponent } from './cursos/components/curso.component';
import { CursoService } from './cursos/services/curso.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    TodoCmp,
    CursoComponent,
  ],
  providers: [
    TodoService,
    CursoService,
  ],
  bootstrap: [
    CursoComponent,
  ],
})
export class AppModule { }
