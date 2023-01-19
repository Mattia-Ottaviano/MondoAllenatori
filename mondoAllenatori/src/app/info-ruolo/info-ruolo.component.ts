import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-ruolo',
  templateUrl: './info-ruolo.component.html',
  styleUrls: ['./info-ruolo.component.css']
})
export class InfoRuoloComponent implements OnInit {
  ruolo!: any;

  constructor(private http: HttpClient, private managerService: ManagerService) { }

  ngOnInit(): void {
    // Creare modello allenatore
    this.managerService.getRuoloId().subscribe(data => {
      console.log(data);
      // Qui      I
      this.http.get('https://3245-mattiaottav-mondoallena-6b0kefahudt.ws-eu83.gitpod.io/getruolo', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
