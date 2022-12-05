import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mondoAllenatori';
  obs!: Observable<any>; ///TODO: Fix data type
  storage: any;
  constructor(private http: HttpClient) {
    this.obs = this.http.get('https://3245-mattiaottav-mondoallena-8qnlyt4dxj6.ws-eu77.gitpod.io/logreg')
    this.obs.subscribe(this.getdata);
  }

  getdata = (data: any) => {
    this.storage = data;
    console.log(this.storage)
  }


  onClick(user: HTMLInputElement, pwd: HTMLInputElement): boolean {
    let values = JSON.stringify({
      user: user.value,
      pwd: pwd.value,
    })

    console.log(values)
    this.http.post('https://3245-mattiaottav-mondoallena-8qnlyt4dxj6.ws-eu77.gitpod.io/pluto', values,)
      .subscribe(() => { console.log("dati inviati con successo") });

    return false
  }
}
