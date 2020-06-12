import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { LanguageComponent } from './components/language/language.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ExportComponent } from './components/export/export.component';
import { ImportComponent } from './components/import/import.component';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';


const routes: Routes = [
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'workspaces', component: WorkspacesComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'export', component: ExportComponent },
  { path: 'import', component: ImportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
