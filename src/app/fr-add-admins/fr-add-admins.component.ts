import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-fr-add-admins',
  templateUrl: './fr-add-admins.component.html',
  styleUrls: ['./fr-add-admins.component.css']
})
export class FrAddAdminsComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
