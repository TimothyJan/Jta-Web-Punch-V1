import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { DateTimeCompComponent } from './date-time-comp/date-time-comp.component';
import { InputCompComponent } from './input-comp/input-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    DateTimeCompComponent,
    InputCompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
