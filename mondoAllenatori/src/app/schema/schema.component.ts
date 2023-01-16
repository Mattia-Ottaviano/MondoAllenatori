import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent {
  @Input() schemi!: any;
  loading!: any;
  data!: any;
  url: string = "https://3245-mattiaottav-mondoallena-ho4vex24ii6.ws-eu82.gitpod.io/pandas/sch";
  constructor(public http: HttpClient) {
    
  }
  getSchemi(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.schemi = data;
      this.loading = false;
    });
 }
}
