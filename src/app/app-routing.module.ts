import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'', component:RegisterComponent},
  {path:'', component:DisplayComponent, outlet:'secondary'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
