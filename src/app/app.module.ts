import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { BodyPartComponent } from './body-part/body-part.component';
import { JoinComponent } from './join/join.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MetaverseComponent } from './metaverse/metaverse.component';
import { RealWorldComponent } from './real-world/real-world.component';


const appRoutes:Routes=[
  {path:"", component: BodyPartComponent},
  {path:"join", component: JoinComponent},
  {path:"accounts", component: AccountsComponent},
  {path:"metaverse", component: MetaverseComponent},
  {path:"real-world", component: RealWorldComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyPartComponent,
    JoinComponent,
    AccountsComponent,
    MetaverseComponent,
    RealWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
