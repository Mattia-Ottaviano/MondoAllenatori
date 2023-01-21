import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-ruolo',
  templateUrl: './info-ruolo.component.html',
  styleUrls: ['./info-ruolo.component.css']
})
export class InfoRuoloComponent implements OnInit {
  ruolo!: any;
  haveLoadedAll: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    /**
    if (this.haveLoadedAll) {
      this.haveLoadedAll = false;
      this.router.navigate(['s/0']);
    }
    */
   
    // Creare modello allenatore
    this.managerService.getRuoloId().subscribe(data => {
      console.log(data);
      // Qui      I
      this.http.get('https://3245-mattiaottav-mondoallena-w6vb3cv5pae.ws-eu83.gitpod.io/getruolo', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
