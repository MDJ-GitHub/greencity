import { Component, OnInit, ElementRef  } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-fr-news',
  templateUrl: './fr-news.component.html',
  styleUrls: ['./fr-news.component.css']
})

export class FrNewsComponent implements OnInit {
  newsload  = '';
  public isCollapsed = true;
  constructor(private elementRef:ElementRef,private http: HttpClient) { }

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
if (typeof responseData =="object") {
  var c = {} ;

      Object.entries(responseData).map(a => {
        Object.entries(a[1]).map(b => {

             // @ts-ignore
             document.getElementById("news").insertAdjacentHTML('afterend', '  <div class="card bg-light mb-3" style="width: 21rem;">    <p> &nbsp;<img class="text-end" src="assets/img/'+b[1].type+'.png" width="40" height="40">      &nbsp;&nbsp;    <img src="/assets/img/person-fill.png" width="20" height="20" style=" float: center;" alt=""> '+b[1].name+' &nbsp;&nbsp;         </p>    <img class="card-img-top" src="'+b[1].picture1+'" alt="Card image cap">        <div class="card-body">      <h5 class="card-title">'+b[1].title+'</h5>      <p class="card-text">'+b[1].subject+'</p>      <p>        <button id="'+b[0]+'btn" "type="button" class="btn btn-outline-success" (click)="collapse('+"'"+ b[0]+"'"+')">          Plus d'+"'"+'informations        </button>      </p>             <div  class="card" >          <div id="'+b[0]+'" style="display:none" class="card-body"> '+b[1].description+'                  <table><tr>  <td>    <img src="'+b[1].picture2+'" width="132" height="107">  </td>  <td>    <img src="'+b[1].picture3+'" width="132" height="107">  </td></tr><tr>  <td>    <img src="'+b[1].picture4+'" width="132" height="107">  </td>  <td>    <img src="'+b[1].picture5+'" width="132" height="107">  </td></tr>            </table></div>      </div>  <img src="/assets/img/calendar.png" width="20" height="20" style=" float: center;" alt="">&nbsp;'+b[1].date+'  </div>  </div>');

             this.elementRef.nativeElement.querySelector('#'+ b[0]+'btn').addEventListener('click', this.collapse.bind(this));

        });

  

        })
      }
});
}
// @ts-ignore
collapse(str) {

  if (typeof str == "object") {
  var x = str.srcElement.id
  } else {x = str
    }

    x = x.replace('btn','');
  // @ts-ignore
   if (document.getElementById(x).style.display == "none") {
 // @ts-ignore
 document.getElementById(x).style.display = "block"
   } else {
     // @ts-ignore
      document.getElementById(x).style.display = "none"
        }
 

}
  

}
