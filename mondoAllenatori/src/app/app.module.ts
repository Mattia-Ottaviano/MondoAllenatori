import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { HomeComponent } from './home/home.component';
import { AllenatoreComponent } from './allenatore/allenatore.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    HomeComponent,
    AllenatoreComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
