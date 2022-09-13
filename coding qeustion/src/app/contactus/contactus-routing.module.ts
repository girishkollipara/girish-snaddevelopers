import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from '../services/services/services.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'', component : ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
