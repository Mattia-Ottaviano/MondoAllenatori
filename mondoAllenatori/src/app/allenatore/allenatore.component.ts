import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-allenatore',
  templateUrl: './allenatore.component.html',
  styleUrls: ['./allenatore.component.css']
})
export class AllenatoreComponent {
  allenatori!: any;
  loading!: Boolean;
  url: string = "http://localhost:3000/pandas/all";

  constructor(public http : HttpClient) {
    this.get(this.url);
}

get(url: string): void {
  this.loading = true;
  this.http.get(url).subscribe(data => {
    this.allenatori = data;
    this.loading = false;
  });

}
}

