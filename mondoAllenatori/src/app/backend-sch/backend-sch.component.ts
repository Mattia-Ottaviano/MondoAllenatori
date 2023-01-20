import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend-sch',
  templateUrl: './backend-sch.component.html',
  styleUrls: ['./backend-sch.component.css']
})
export class BackendSchComponent {

  addSchForm!: FormGroup;
  

  constructor(private http: HttpClient, private fb: FormBuilder) { }


  ngOnInit(): void {
    
    this.addSchForm = this.fb.group({
      nome: ["", [Validators.required]],
      n_dif: ["", [Validators.required]],
      n_cen: ["", [Validators.required]],
      n_att: ["", [Validators.required]],
      descr: ["", [Validators.required]],
    });
  }

  onSchCreate() {

    let body: HttpParams = new HttpParams();
    body = body.appendSch({
      nome: this.addSchForm.value.nome,
      n_dif: this.addSchForm.value.n_dif,
      n_cen: this.addSchForm.value.n_cen,
      n_att: this.addSchForm.value.n_att,
      descr: this.addSchForm.value.descr
      
    })

    // Esegue la richiesta non tipizzata
    this.http.post("https://3245-mattiaottav-mondoallena-0xenfks2yy9.ws-eu83.gitpod.io/backendSch", '', {
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
