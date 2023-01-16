import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() url : string = "https://3245-mattiaottav-mondoallena-u4l9g4tbhth.ws-eu82.gitpod.io/register/data";
}