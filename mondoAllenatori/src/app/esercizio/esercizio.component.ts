import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';
@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css']
})
export class EsercizioComponent {
  @Input() esercizi!: any;
  esercizio!: any;
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-v94sm9ywzcv.ws-eu82.gitpod.io";
  // url1: string = "https://3245-mattiaottav-mondoallena-c21a4ey5vwm.ws-eu82.gitpod.io/all";

  constructor(public http: HttpClient, private router: Router, private managerService: ManagerService) { }

 
  onKey(value:string) {
   // this.getAllen(this.url + "?allenatore.nome=" + value);
  }

  navigate(id : string) {
    this.managerService.setEsercizio(id);
    this.router.navigate([`e/${id}`]);
  }
}
