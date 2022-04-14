import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-fr-forgot-password',
  templateUrl: './fr-forgot-password.component.html',
  styleUrls: ['./fr-forgot-password.component.css']
})
export class FrForgotPasswordComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
