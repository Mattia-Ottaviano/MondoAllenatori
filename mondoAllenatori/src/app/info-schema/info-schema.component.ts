import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-schema',
  templateUrl: './info-schema.component.html',
  styleUrls: ['./info-schema.component.css']
})
export class InfoSchemaComponent implements OnInit {
  schema!: any;
  haveLoadedAll: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    /**
    if (this.haveLoadedAll) {
      this.haveLoadedAll = false;
      this.router.navigate(['home']);
    }
    */
   
    // Creare modello schema
    this.managerService.getSchemaId().subscribe(data => {
      console.log(data);
      // Qui      I
      this.http.get('https://3245-mattiaottav-mondoallena-w6vb3cv5pae.ws-eu83.gitpod.io/getschema', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
