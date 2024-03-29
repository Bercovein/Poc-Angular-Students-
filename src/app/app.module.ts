import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentsService } from './services/students.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddStudentComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentsService]
})
export class AppModule { }
