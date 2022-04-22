import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Problems } from '../problems';
const baseUrl = 'https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems';
@Injectable({
  providedIn: 'root'
})
export class ProblemService {
     httpOptions = {
        headers: new HttpHeaders()
      }


    constructor(private http: HttpClient) { }

  getAll(): Observable<Problems[]> {

    var loc =  localStorage.getItem("currentpos") ;

    let typ = document.getElementsByName("dtype");
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 
  
  
    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     return this.http.get<Problems[]>("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+".json",this.httpOptions);
       
    }


  get($key: any): Observable<Problems> {
    var loc =  localStorage.getItem("currentpos") ;

    let typ = document.getElementsByName("dtype");
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 
  
  
    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     return this.http.get<Problems>("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+"/"+$key+".json",this.httpOptions);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update($key: any, data: any): Observable<any> {
    var loc =  localStorage.getItem("currentpos") ;

    let typ = document.getElementsByName("dtype");
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 

    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     return this.http.put<Problems[]>("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+"/"+$key+".json",this.httpOptions,data);
 }

  deleteByProblem($key: any): Observable<any> {

    var loc =  localStorage.getItem("currentpos") ;

    let typ = document.getElementsByName("dtype");
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 

    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     return this.http.delete<Problems[]>("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+"/"+$key+".json",this.httpOptions);
  }
  deleteAll(): Observable<any> {
    var loc =  localStorage.getItem("currentpos") ;

    let typ = document.getElementsByName("dtype");
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 
    
    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     return this.http.delete<Problems[]>("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+".json",this.httpOptions);  }
  
   findByLocation(location: any): Observable<Problems[]> {

    var loc =  localStorage.getItem("currentpos") ;

    let typ = document.getElementsByName("dtype");
  
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h = String(today.getHours()).padStart(2, '0');
    var m = String(today.getMinutes()).padStart(2, '0');
    var s = String(today.getSeconds()).padStart(2, '0');
    var time = h + ":" + m + ":" + s +  "  " + mm + '/' + dd + '/' + yyyy ; 
    
    this.httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.httpOptions.headers.append('Content-Type', 'application/json');
    this.httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
     return this.http.get<Problems[]>("https://greencity-tn-default-rtdb.europe-west1.firebasedatabase.app/problems/"+loc+"/"+typ+"/"+location+".json",this.httpOptions);
       
    }
    
  }
