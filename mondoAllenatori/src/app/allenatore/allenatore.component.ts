import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allenatore!: any;
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-c21a4ey5vwm.ws-eu82.gitpod.io/all/{{id}}";
  constructor(public http: HttpClient) {
    this.getInfoAllen(this.url + "/a/<id>");
  }
  
  getInfoAllen(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.allenatore = data;
      this.loading = false;
    });
  }
}