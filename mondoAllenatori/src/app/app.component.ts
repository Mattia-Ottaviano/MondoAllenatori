import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allenatore!: any;
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-j84m325yz68.ws-eu81.gitpod.io/pandas/staff";

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.allenatore = data;
      this.loading = false;
    });
  }

  // previousSearch: string = '';
  // onKey(value: string) {
  //   if (value != this.previousSearch) {
  //     this.get(this.url + "?store_name=" + value);
  //     this.previousSearch = value;
  //   }
  // }

  onKey(value: string) {
    this.get(this.url + "?store_name=" + value);
  }
}