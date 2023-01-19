import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-esercizio',
  templateUrl: './info-esercizio.component.html',
  styleUrls: ['./info-esercizio.component.css']
})
export class InfoEsercizioComponent {
  esercizio!: any;

  constructor(private http: HttpClient, private managerService: ManagerService) { }

  ngOnInit(): void {
    // Creare modello esercizio
    this.managerService.getEsercizioId().subscribe(data => {
      console.log(data);
      // Qui      I
      this.http.get('https://3245-mattiaottav-mondoallena-6b0kefahudt.ws-eu83.gitpod.io/getesercizio', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
