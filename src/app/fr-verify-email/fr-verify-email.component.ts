import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-fr-verify-email',
  templateUrl: './fr-verify-email.component.html',
  styleUrls: ['./fr-verify-email.component.css']
})
export class FrVerifyEmailComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
