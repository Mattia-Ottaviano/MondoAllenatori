import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent {
  @Input() schemi!: any;
  loading!: any;
  data!: any;
  url: string = "https://3245-mattiaottav-mondoallena-v94sm9ywzcv.ws-eu82.gitpod.io";
  constructor(public http: HttpClient, private router: Router, private managerService: ManagerService) {
    
  }
  onKey(value:string) {
    // this.getAllen(this.url + "?allenatore.nome=" + value);
   }
 
   navigate(id : string) {
     this.managerService.setSchema(id);
     this.router.navigate([`s/${id}`]);
   }
}
