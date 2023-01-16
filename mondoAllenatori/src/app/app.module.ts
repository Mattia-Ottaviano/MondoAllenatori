import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllenatoreComponent } from './allenatore/allenatore.component';
import { SchemaComponent } from './schema/schema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoAllenatoreComponent } from './info-allenatore/info-allenatore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AllenatoreComponent,
    SchemaComponent,
    InfoAllenatoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
