import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-ruolo',
  templateUrl: './ruolo.component.html',
  styleUrls: ['./ruolo.component.css']
})
export class RuoloComponent {
  @Input() ruoli!: any;
  ruolo!: any;
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io";


  constructor(public http: HttpClient, private router: Router, private managerService: ManagerService) { }

 
  onKey(value:string) {
   // this.getAllen(this.url + "?allenatore.nome=" + value);
  }

  navigate(id : string) {
    this.managerService.setRuolo(id);
    this.router.navigate([`r/${id}`]);
  }
}

