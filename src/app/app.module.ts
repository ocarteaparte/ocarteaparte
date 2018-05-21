import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationService } from './services/registration.service';
import { BookComponent } from './book/book.component';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RegistrationService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }