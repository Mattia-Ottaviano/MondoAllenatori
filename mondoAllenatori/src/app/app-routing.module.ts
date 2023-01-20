import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllenatoreComponent } from './allenatore/allenatore.component';
import { InfoAllenatoreComponent } from './info-allenatore/info-allenatore.component';
import { InfoSchemaComponent } from './info-schema/info-schema.component';
import { InfoRuoloComponent } from './info-ruolo/info-ruolo.component';
import { InfoEsercizioComponent } from './info-esercizio/info-esercizio.component';
import { BackendComponent } from './backend/backend.component';
import { BackendEseComponent } from './backend-ese/backend-ese.component';
import { BackendSchComponent } from './backend-sch/backend-sch.component';
import { BackendRuoComponent } from './backend-ruo/backend-ruo.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'a/:id', component:  InfoAllenatoreComponent },
  { path: 's/:id', component:  InfoSchemaComponent },
  { path: 'r/:id', component:  InfoRuoloComponent },
  { path: 'e/:id', component:  InfoEsercizioComponent },
  { path: 'backend', component:  BackendComponent },
  { path: 'backendese', component:  BackendEseComponent },
  { path: 'backendsch', component:  BackendSchComponent },
  { path: 'backendruo', component:  BackendRuoComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
