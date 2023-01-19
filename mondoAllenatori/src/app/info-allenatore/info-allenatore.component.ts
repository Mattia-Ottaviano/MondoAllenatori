import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-allenatore',
  templateUrl: './info-allenatore.component.html',
  styleUrls: ['./info-allenatore.component.css']
})
export class InfoAllenatoreComponent implements OnInit {
  allenatore!: any;

  constructor(private http: HttpClient, private managerService: ManagerService) { }

  ngOnInit(): void {
    // Creare modello allenatore
    this.managerService.getAllenatoreId().subscribe(data => {
      console.log(data); 
      this.http.get('https://3245-mattiaottav-mondoallena-6b0kefahudt.ws-eu83.gitpod.io/getallenatore', { params: { 'id': data } }).subscribe(dataRequest => {
        console.group(dataRequest)
      });
    })
  }
}
