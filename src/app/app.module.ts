import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HttpClientModule }    from '@angular/common/http';
import { HerosListComponent } from './heros-list/heros-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailsOverviewComponent } from './hero-details-overview/hero-details-overview.component';
import { HeroDetailsOrigianlInfoComponent } from './hero-details-origianl-info/hero-details-origianl-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosListComponent,
    HeroSearchComponent,
    HeroDetailsComponent,
    PageNotFoundComponent,
    HeroDetailsOverviewComponent,
    HeroDetailsOrigianlInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
