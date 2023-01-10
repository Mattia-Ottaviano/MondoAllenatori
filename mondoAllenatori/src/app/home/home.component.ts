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
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-nke0i1rw7st.ws-eu81.gitpod.io";
  constructor(public http: HttpClient) {
    this.getAllen(this.url + "/pandas/all");
  }
  
  getAllen(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.allenatori = data;
      this.loading = false;
    });
  }

  getSchemi(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.schemi = data;
      this.loading = false;
      this.getSchemi(this.url + "/pandas/schemi");
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


