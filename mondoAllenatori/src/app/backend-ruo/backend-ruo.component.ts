import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend-ruo',
  templateUrl: './backend-ruo.component.html',
  styleUrls: ['./backend-ruo.component.css']
})
export class BackendRuoComponent {

  addRuoForm!: FormGroup;
  

  constructor(private http: HttpClient, private fb: FormBuilder) { }


  ngOnInit(): void {
    
    this.addRuoForm = this.fb.group({
      nome: ["", [Validators.required]],
      caratteristiche: ["", [Validators.required]],
      esempi: ["", [Validators.required]],
      zona: ["", [Validators.required]],
    });
  }

  onRuoCreate() {

    let body: HttpParams = new HttpParams();
    body = body.appendAll({
      nome: this.addRuoForm.value.nome,
      caratteristiche: this.addRuoForm.value.caratteristiche,
      esempi: this.addRuoForm.value.esempi,
      zona: this.addRuoForm.value.zona
    })

    // Esegue la richiesta non tipizzata
    this.http.post("https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io/backendRuo", '', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: body,
      responseType: "json"
    }).subscribe(data => {
      console.log(data);
    })
  }
}