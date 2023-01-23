import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend-ese',
  templateUrl: './backend-ese.component.html',
  styleUrls: ['./backend-ese.component.css']
})
export class BackendEseComponent {

  addEseForm!: FormGroup;
  

  constructor(private http: HttpClient, private fb: FormBuilder) { }


  ngOnInit(): void {
    
    this.addEseForm = this.fb.group({
      nome: ["", [Validators.required]],
      difficolta: ["", [Validators.required]],
      n_gioc: ["", [Validators.required]],
      scopo: ["", [Validators.required]],
    });
  }

  onEseCreate() {

    let body: HttpParams = new HttpParams();
    body = body.appendAll({
      nome: this.addEseForm.value.nome,
      n_gioc: this.addEseForm.value.n_gioc,
      difficolta: this.addEseForm.value.difficolta,
      scopo: this.addEseForm.value.scopo
      
    })

    // Esegue la richiesta non tipizzata
    this.http.post("https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io/backendEse", '', {
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


