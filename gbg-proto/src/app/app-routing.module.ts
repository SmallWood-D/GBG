import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LauncherComponent } from './launcher/launcher.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
    { path: '', redirectTo: '/launcher', pathMatch: 'full' },
    { path: 'launcher', component: LauncherComponent }
    { path: 'repo-view', component: RepoComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
