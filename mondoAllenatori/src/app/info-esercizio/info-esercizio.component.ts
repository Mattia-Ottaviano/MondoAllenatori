import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Esercizio } from 'src/models/esercizio.model';
import { Data } from 'src/models/richiestaEsercizio.model';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-esercizio',
  templateUrl: './info-esercizio.component.html',
  styleUrls: ['./info-esercizio.component.css']
})
export class InfoEsercizioComponent {
  esercizio!: Esercizio;
  haveLoadedEse: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router, private ngZone: NgZone, private cd: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {


    const data = Number(this.route.snapshot.paramMap.get('id'))

    console.log(data);
    this.http.get<Data>('https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io/getesercizio', { params: { 'id': data } }).subscribe(e => {
      this.esercizio = e.data;
      console.table (e.data)
      this.cd.detectChanges();
    });
  }
}
