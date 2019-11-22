import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormreactiveComponent } from './formreactivecomponent/formreactivecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormreactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [FormreactiveComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
