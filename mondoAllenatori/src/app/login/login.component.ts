
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  passw: string = '';
  url: string = "https://3245-mattiaottav-mondoallena-6b0kefahudt.ws-eu83.gitpod.io/login/data"
  form!: FormGroup;
  data!: any;
  constructor(public http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  submit(): void {
    let body: HttpParams = new HttpParams();
    body = body.appendAll({
      email: this.form.value.email,
      password: this.form.value.password
    })
    this.http.post(this.url, '', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: body,
      responseType: "json"
    }).subscribe(data => {
      this.data = data

      //set local storage
      
    });
  }
}