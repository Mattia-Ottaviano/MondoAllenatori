import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Allenatore } from 'src/models/allenatore.model';
import { Data } from 'src/models/richiestaAllenatore.model';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-allenatore',
  templateUrl: './info-allenatore.component.html',
  styleUrls: ['./info-allenatore.component.css']
})
export class InfoAllenatoreComponent implements OnInit {
  allenatore: Allenatore = new Allenatore();
  haveLoadedAll: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {

    // if(this.haveLoadedAll) {
    //   this.haveLoadedAll = false;
    //   this.router.navigate(['e/0']);
    // }


    this.managerService.getAllenatoreId().subscribe(data => {
      if (data == null || data == undefined) return;

      this.http.get<Data>('https://3245-mattiaottav-mondoallena-w6vb3cv5pae.ws-eu83.gitpod.io/getallenatore', { params: { 'id': data } }).subscribe(a => {
        this.allenatore = a.data;
        console.table(a.data)
      });
    })


    // setTimeout(() => {
    //   this.allenatore = new Allenatore(0, 'Ugo', 'Bruco', 'Napoli', '0')
    // }, 3000);
  }

}
