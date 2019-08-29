import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AccessFormComponent } from './access-form/access-form.component';

const routes: Routes = [
  { path: 'display1', component: DisplayComponent},
  { path: '', component: AccessFormComponent},
  { path: 'display1/:id', component: DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
