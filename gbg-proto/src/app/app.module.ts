import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LauncherComponent } from './launcher/launcher.component';
import { AppRoutingModule } from './app-routing.module';
import { RecentReposComponent } from './recent-repos/recent-repos.component';
import { RepoComponent } from './repo/repo.component';


@NgModule({
  declarations: [
    AppComponent,
    LauncherComponent,
    RecentReposComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
