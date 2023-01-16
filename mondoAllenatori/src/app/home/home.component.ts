import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allenatori!: any;
  schemi!: any;
  ruoli!: any;
  esercizi!: any;
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-u4l9g4tbhth.ws-eu82.gitpod.io";
  constructor(public http: HttpClient) {
    this.getAllen(this.url + "/pandas/all");
  }
  
  getAllen(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.allenatori = data;
      this.loading = false;
      this.getSchemi(this.url + "/pandas/sch");
    });
  }

  getSchemi(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.schemi = data;
      this.loading = false;
      this.getRuoli(this.url + "/pandas/ruo");
    });
 }
 getRuoli(url: string): void {
  this.loading = true;
  this.http.get(url).subscribe(data => {
    this.ruoli = data;
    this.loading = false;
    this.getEsercizi(this.url + "/pandas/ese")
  });
}


getEsercizi(url: string): void {
  this.loading = true;
  this.http.get(url).subscribe(data => {
    this.esercizi = data;
    this.loading = false;
  });
}

}
  

  // previousSearch: string = '';
  // onKey(value: string) {
  //   if (value != this.previousSearch) {
  //     this.get(this.url + "?store_name=" + value);
  //     this.previousSearch = value;
  //   }
  // }

 // onKey(value: string) {
//  this.get(this.url + "?store_name=" + value);
//  }


