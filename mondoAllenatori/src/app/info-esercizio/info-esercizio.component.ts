import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-esercizio',
  templateUrl: './info-esercizio.component.html',
  styleUrls: ['./info-esercizio.component.css']
})
export class InfoEsercizioComponent {
  esercizio!: any;
  haveLoadedAll: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    /**
    if (this.haveLoadedAll) {
      this.haveLoadedAll = false;
      this.router.navigate(['r/0']);
    }
    */
   
    // Creare modello esercizio
    this.managerService.getEsercizioId().subscribe(data => {
      console.log(data);
      // Qui      I
      this.http.get('https://3245-mattiaottav-mondoallena-w6vb3cv5pae.ws-eu83.gitpod.io/getesercizio', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
