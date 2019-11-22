import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormreactiveComponent } from './formreactivecomponent/formreactivecomponent.component';


const routes: Routes = [
  {path: '',  component:FormreactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
