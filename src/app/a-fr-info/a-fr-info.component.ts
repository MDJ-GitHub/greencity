import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth';

@Component({
  selector: 'app-a-fr-info',
  templateUrl: './a-fr-info.component.html',
  styleUrls: ['./a-fr-info.component.css']
})
export class AFrInfoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
