import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { AppComponent } from './app.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailsOverviewComponent } from './hero-details-overview/hero-details-overview.component';
import { HeroDetailsOrigianlInfoComponent } from './hero-details-origianl-info/hero-details-origianl-info.component';

const routes: Routes = [
  //{ path:'', component: AppComponent}
  { path:'dashboard',component:HerosComponent},
  { path:'heroes',component:HerosListComponent},
  { path:'heroes/:id', component:HeroDetailsComponent,
    children:[
      {path:'marvelInfo',component:HeroDetailsOverviewComponent},
      {path:'originalInfo',component:HeroDetailsOrigianlInfoComponent}
    ]
  },
 // {path:'heroes/:id',redirectTo:'/heroes/:id/marvelInfo',component:HeroDetailsOverviewComponent},
  { path:'',redirectTo:'/dashboard', pathMatch:'full'},
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
