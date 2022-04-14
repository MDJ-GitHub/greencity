import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-fr-login',
  templateUrl: './fr-login.component.html',
  styleUrls: ['./fr-login.component.css']
})
export class FrLoginComponent implements OnInit {

  constructor(
     public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
