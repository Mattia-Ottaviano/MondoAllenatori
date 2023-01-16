
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = '';
  passw:string = '';
  url:string = "https://3245-mattiaottav-mondoallena-u4l9g4tbhth.ws-eu82.gitpod.io/login/data"
  constructor(public http: HttpClient) {
  }
}