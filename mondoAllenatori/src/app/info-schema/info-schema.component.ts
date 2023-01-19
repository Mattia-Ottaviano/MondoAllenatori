import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-schema',
  templateUrl: './info-schema.component.html',
  styleUrls: ['./info-schema.component.css']
})
export class InfoSchemaComponent implements OnInit {
  schema!: any;

  constructor(private http: HttpClient, private managerService: ManagerService) { }

  ngOnInit(): void {
    // Creare modello schema
    this.managerService.getSchemaId().subscribe(data => {
      console.log(data);
      // Qui      I
      this.http.get('https://3245-mattiaottav-mondoallena-mwjsluqec1q.ws-eu83.gitpod.io/getschema', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
