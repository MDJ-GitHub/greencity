import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fr-news',
  templateUrl: './fr-news.component.html',
  styleUrls: ['./fr-news.component.css']
})

export class FrNewsComponent implements OnInit {
  public isCollapsed = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getInfo()

  }

getInfo() {
  const httpOptions = {
    headers: new HttpHeaders()
  }
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Content-Type', 'application/json');
  httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  var loc = localStorage.getItem("currentpos") ;
    this.http.get("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/.json",httpOptions).subscribe(responseData => {
      console.log(responseData);
    });
}


  

}
