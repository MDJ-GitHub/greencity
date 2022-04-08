import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fr-news',
  templateUrl: './fr-news.component.html',
  styleUrls: ['./fr-news.component.css']
})

export class FrNewsComponent implements OnInit {
  public isCollapsed = true;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.testcrud() ;
    
  }

  testcrud(): void {
    const data = {
      name: "x",
    };

    alert("es") ;
    this.httpClient.post("https://greencity-64460.web.app/waste/save",data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  

}
