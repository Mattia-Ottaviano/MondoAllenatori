import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/models/redirectData.model';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit{

  url: string = "https://3245-mattiaottav-mondoallena-ho4vex24ii6.ws-eu82.gitpod.io/all";
  form!: FormGroup;

    constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

ngOnInit(): void {
  this.form = this.fb.group({
    nome: [""],
    cognome: [""],
    squadra: [""],
  });
}
  submit() {
    let body: HttpParams = new HttpParams();
    body = body.appendAll({
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      squadra: this.form.value.squadra
    });
  
  this.http.post<Data>(this.url, '', {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),

    params: body,
    responseType: "json"
  })
}}