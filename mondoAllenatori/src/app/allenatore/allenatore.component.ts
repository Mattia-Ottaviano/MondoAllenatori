import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-allenatore',
  templateUrl: './allenatore.component.html',
  styleUrls: ['./allenatore.component.css']
})
export class AllenatoreComponent {
  @Input() allenatori!: any;
  allenatore!: any;
  loading!: Boolean;
  url: string = "https://3245-mattiaottav-mondoallena-ho4vex24ii6.ws-eu82.gitpod.io";
  // url1: string = "https://3245-mattiaottav-mondoallena-c21a4ey5vwm.ws-eu82.gitpod.io/all";

  constructor(public http: HttpClient, private router: Router, private managerService: ManagerService) { }

 
  onKey(value:string) {
   // this.getAllen(this.url + "?allenatore.nome=" + value);
  }

  navigate(id : string) {
    this.managerService.setAllenatore(id);
    this.router.navigate([`a/${id}`]);
  }
}