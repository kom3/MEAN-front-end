import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
