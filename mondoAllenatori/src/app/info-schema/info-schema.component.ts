import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schema } from 'src/models/schema.model';
import { Data } from 'src/models/richiestaSchema.model';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-info-schema',
  templateUrl: './info-schema.component.html',
  styleUrls: ['./info-schema.component.css']
})
export class InfoSchemaComponent implements OnInit {
  schema!: Schema;
  haveLoadedSch: boolean = true;

  constructor(private http: HttpClient, private managerService: ManagerService, private router: Router, private ngZone: NgZone, private cd: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {


    const data = Number(this.route.snapshot.paramMap.get('id'))

    console.log(data);
    this.http.get<Data>('https://3245-mattiaottav-mondoallena-d0hbm3m30in.ws-eu83.gitpod.io/getschema', { params: { 'id': data } }).subscribe(s => {
      this.schema = s.data;
      console.table (s.data)
      this.cd.detectChanges();
    });
  }
}
