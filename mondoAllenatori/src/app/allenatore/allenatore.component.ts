import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-allenatore',
  templateUrl: './allenatore.component.html',
  styleUrls: ['./allenatore.component.css']
})
export class AllenatoreComponent{
  id!: any;
  nome!: any;
  cognome!: any;
  squadra!: any;
  immagine!: any;
  data!: any;
  data1!: any;
  loading!: any;
  urlAllenatore!: 'https://3245-mattiaottav-mondoallena-c21a4ey5vwm.ws-eu82.gitpod.io/a/{{id}}';

  constructor(public http: HttpClient) {
    this.getInfoAll(this.urlAllenatore + "/a/<id>");
  }

  getInfoAll(urlAllenatore: string): void {
    this.loading = true;
    this.http.get(urlAllenatore).subscribe(data => {
      this.esercizi = data;
      this.loading = false;
    });
  }

  @Input() keyCount: any; 
  public Id: any;
  
   constructor(public http: HttpClient) {
    this.get(this.urlAllenatore+this.Id)

   }

   get(url: string): void {
      this.http.get(url).subscribe(data => { 
      this.data = data;
      })
   }

   makeCompactPost(): void {
      this.loading = true;
      this.http
        .post('https://jsonplaceholder.typicode.com/posts',
          JSON.stringify({ 
            body: 'bar',
            title: 'foo',
            userId: 1
          })
        )
        .subscribe(data1 => {
          this.data1 = data1;
          this.loading = false;
        });
   }
   makePost(): void {
    this.get(this.urlAllenatore + this.data1.cognome);
    console.log(this.data1.cognome);
   }
   
   ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId['a.cognome'];
      
      this.get('https://3245-mattiaottav-mondoallena-c21a4ey5vwm.ws-eu82.gitpod.io/a/'+this.id)
  });
   }
}


