import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { LanguageComponent } from './components/language/language.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ExportComponent } from './components/export/export.component';
import { ImportComponent } from './components/import/import.component';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { UnsupportedComponent } from './core/unsupported/unsupported.component';
import { DebitspaceComponent } from './core/debitspace/debitspace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WorkspacesComponent,
    DashbaordComponent,
    LanguageComponent,
    SettingsComponent,
    ExportComponent,
    ImportComponent,
    UnsupportedComponent,
    DebitspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
