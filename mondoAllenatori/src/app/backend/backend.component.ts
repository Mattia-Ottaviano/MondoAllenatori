import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent {
  
  addAllForm!: FormGroup;
  
  
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {

    

    
    this.addAllForm = this.fb.group({
      nome: ["", [Validators.required]],
      cognome: ["", [Validators.required]],
      squadra: ["", [Validators.required]]
    });
  }

  onShopCreate() {
    // Crea l'oggetto che in seguito va inserito nell'intestazione della richiesta
    let body: HttpParams = new HttpParams();
    body = body.appendAll({
      phone: this.addAllForm.value.phone,
      via: this.addAllForm.value.via,
      city: this.addAllForm.value.city
      
    })

    // Esegue la richiesta non tipizzata
    this.http.post("https://3245-mattiaottav-mondoallena-6b0kefahudt.ws-eu83.gitpod.io/backend", '', {
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