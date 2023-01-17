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
import { InfoSchemaComponent } from './info-schema/info-schema.component';
import { BackendComponent } from './backend/backend.component';
import { RuoloComponent } from './ruolo/ruolo.component';
import { InfoRuoloComponent } from './info-ruolo/info-ruolo.component';
import { EsercizioComponent } from './esercizio/esercizio.component';
import { InfoEsercizioComponent } from './info-esercizio/info-esercizio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AllenatoreComponent,
    SchemaComponent,
    InfoAllenatoreComponent,
    InfoSchemaComponent,
    BackendComponent,
    RuoloComponent,
    InfoRuoloComponent,
    EsercizioComponent,
    InfoEsercizioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
