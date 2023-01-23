import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ruolo } from 'src/models/ruolo.model';
import { Data } from 'src/models/richiestaRuolo.model';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-ruolo',
  templateUrl: './info-ruolo.component.html',
  styleUrls: ['./info-ruolo.component.css']
})
export class InfoRuoloComponent implements OnInit {
  ruolo!: Ruolo;
  haveLoadedRuo: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router, private ngZone: NgZone, private cd: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {


    const data = Number(this.route.snapshot.paramMap.get('id'))

    console.log(data);
    this.http.get<Data>('https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io/getruolo', { params: { 'id': data } }).subscribe(r => {
      this.ruolo = r.data;
      console.table (r.data)
      this.cd.detectChanges();
    });
  }
}
