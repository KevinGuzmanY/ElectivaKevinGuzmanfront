import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewListComponent} from './components/view-list/view-list.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';
import {SupplyComponent} from './components/supply/supply.component';

const routes: Routes = [
  {path: 'list', component: ViewListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add', component: AddComponent},
  {path: 'supply', component: SupplyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
