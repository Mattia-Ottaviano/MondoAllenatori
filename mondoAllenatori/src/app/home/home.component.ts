import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AllenatoreComponent } from '../allenatore/allenatore.component';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allenatori!: any;
  schemi!: any;
  ruoli!: any;
  esercizi!: any;
  loading!: Boolean;

  url: string = "https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io";
  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService
  ) {
  }

  ngOnInit(): void {
    this.getAllen(this.url + "/pandas/all");

    console.log(this.storage.getData('id'))
    if (this.storage.getData('id') == null) this.router.navigate(['login']);
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

  logout() {
    this.storage.clearData();
    this.router.navigate(['login']);
  }
}

// onKey(value: string) {
// this.get(this.url + "?allenatore=" + value);
//}


