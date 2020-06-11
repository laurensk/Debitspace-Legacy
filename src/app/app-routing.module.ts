import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';


const routes: Routes = [
  { path: '', component: WorkspacesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
