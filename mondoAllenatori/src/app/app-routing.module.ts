import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllenatoreComponent } from './allenatore/allenatore.component';
import { InfoAllenatoreComponent } from './info-allenatore/info-allenatore.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'a/:id', component:  InfoAllenatoreComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
