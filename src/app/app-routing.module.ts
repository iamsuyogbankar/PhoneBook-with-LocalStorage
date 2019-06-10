import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfContactComponent } from './list-of-contact/list-of-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';

const routes: Routes = [
  {path: '', component: ListOfContactComponent, pathMatch: 'full'},
  {path: 'list-of-contact', component: ListOfContactComponent},
  {path: 'update-contact/:id', component: UpdateContactComponent},
  {path: 'addcontacts', component: AddcontactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ListOfContactComponent,
   UpdateContactComponent, AddcontactsComponent]
