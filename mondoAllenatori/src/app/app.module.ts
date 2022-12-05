import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { HomeComponent } from './home/home.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    HomeComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
