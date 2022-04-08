import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greencity';

  ngOnInit(): void {
    getlocation() ;
  }
}



function getlocation() {
    
  var locs = [
    {
      city: "Tunis",
      lat: 36.8008,
      lng: 10.18
    },
    {
      city: "Sfax",
      lat: 34.74,
      lng: 10.76
    },
    {
      city: "Sousse",
      lat: 35.8333,
      lng: 10.6333
    },
    {
      city: "Kairouan",
      lat: 35.6833,
      lng: 10.1
    },
    {
      city: "Metouia",
      lat: 33.96,
      lng: 10
    },
    {
      city: "Kebili",
      lat: 33.705,
      lng: 8.965
    },
    {
      city: "Bizerte",
      lat: 37.2744,
      lng: 9.8739
    },
    {
      city: "Sidi Bouzid",
      lat: 35.0381,
      lng: 9.4858
    },
    {
      city: "Gabes",
      lat: 33.8814,
      lng: 10.0983
    },
    {
      city: "Ariana",
      lat: 36.8625,
      lng: 10.1956
    },
    {
      city: "Jendouba",
      lat: 36.5011,
      lng: 8.7803
    },
    {
      city: "Gafsa",
      lat: 34.4167,
      lng: 8.7833
    },
    {
      city: "Msaken",
      lat: 35.7333,
      lng: 10.5833
    },
    {
      city: "Medenine",
      lat: 33.3547,
      lng: 10.5053
    },
    {
      city: "Beja",
      lat: 36.7256,
      lng: 9.1817
    },
    {
      city: "Kasserine",
      lat: 35.1667,
      lng: 8.8333
    },
    {
      city: "Monastir",
      lat: 35.778,
      lng: 10.8262
    },
    {
      city: "Hammamet",
      lat: 36.4167,
      lng: 10.6
    },
    {
      city: "Tataouine",
      lat: 32.9333,
      lng: 10.45
    },
    {
      city: "La Marsa",
      lat: 36.8764,
      lng: 10.3253
    },
    {
      city: "Ben Arous",
      lat: 36.7531,
      lng: 10.2189
    },
    {
      city: "Sakiet ez Zit",
      lat: 34.8,
      lng: 10.77
    },
    {
      city: "Zarzis",
      lat: 33.5,
      lng: 11.1167
    },
    {
      city: "Ben Gardane",
      lat: 33.1389,
      lng: 11.2167
    },
    {
      city: "Mahdia",
      lat: 35.5047,
      lng: 11.0622
    },
    {
      city: "Houmt Souk",
      lat: 33.8667,
      lng: 10.85
    },
    {
      city: "Fouchana",
      lat: 36.6987,
      lng: 10.1693
    },
    {
      city: "Le Kram",
      lat: 36.8333,
      lng: 10.3167
    },
    {
      city: "Le Bardo",
      lat: 36.8092,
      lng: 10.1406
    },
    {
      city: "El Kef",
      lat: 36.1667,
      lng: 8.7
    },
    {
      city: "El Hamma",
      lat: 33.8864,
      lng: 9.7951
    },
    {
      city: "Nabeul",
      lat: 36.4514,
      lng: 10.7361
    },
    {
      city: "Djemmal",
      lat: 35.64,
      lng: 10.76
    },
    {
      city: "Korba",
      lat: 36.5667,
      lng: 10.8667
    },
    {
      city: "Menzel Temime",
      lat: 36.7833,
      lng: 10.9833
    },
    {
      city: "Ghardimaou",
      lat: 36.4503,
      lng: 8.4397
    },
    {
      city: "Menzel Bourguiba",
      lat: 37.15,
      lng: 9.7833
    },
    {
      city: "Radès",
      lat: 36.7667,
      lng: 10.2833
    },
    {
      city: "Manouba",
      lat: 36.8,
      lng: 10.1
    },
    {
      city: "Kelibia",
      lat: 36.8475,
      lng: 11.0939
    },
    {
      city: "Rass el Djebel",
      lat: 37.215,
      lng: 10.12
    },
    {
      city: "Tebourba",
      lat: 36.8295,
      lng: 9.8411
    },
    {
      city: "El Jem",
      lat: 35.3,
      lng: 10.7167
    },
    {
      city: "Douz",
      lat: 33.4572,
      lng: 9.0258
    },
    {
      city: "Hammam Sousse",
      lat: 35.8589,
      lng: 10.5939
    },
    {
      city: "Hammam-Lif",
      lat: 36.7308,
      lng: 10.3275
    },
    {
      city: "Sbiba",
      lat: 35.5433,
      lng: 9.0736
    },
    {
      city: "Sejenane",
      lat: 37.0564,
      lng: 9.2382
    },
    {
      city: "Tozeur",
      lat: 33.9197,
      lng: 8.1336
    },
    {
      city: "Dar Chabanne",
      lat: 36.47,
      lng: 10.75
    },
    {
      city: "Aine Draham",
      lat: 36.7833,
      lng: 8.7
    },
    {
      city: "Bou Salem",
      lat: 36.6111,
      lng: 8.9698
    },
    {
      city: "Ez Zahra",
      lat: 36.7439,
      lng: 10.3083
    },
    {
      city: "Skhira",
      lat: 34.3006,
      lng: 10.0708
    },
    {
      city: "Akouda",
      lat: 35.8712,
      lng: 10.5712
    },
    {
      city: "Mateur",
      lat: 37.04,
      lng: 9.665
    },
    {
      city: "Rhennouch",
      lat: 33.9397,
      lng: 10.065
    },
    {
      city: "Dahmani",
      lat: 35.9424,
      lng: 8.8284
    },
    {
      city: "El Alia",
      lat: 37.1667,
      lng: 10.0333
    },
    {
      city: "Siliana",
      lat: 36.0819,
      lng: 9.3747
    },
    {
      city: "Zaghouan",
      lat: 36.4028,
      lng: 10.1433
    }
   ]

   var lat = 0 ;
   var lng = 0 ;
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
       lng = position.coords.longitude;
       lat = position.coords.latitude;

      
       var cc = "Tunis" ;
       var clat = 36.8008
       var clng = 10.18 ;
   
       locs.forEach(function (arrayItem) {
   
         if ( Math.abs((lat - arrayItem.lat) + (lng - arrayItem.lng)) < Math.abs((lat - clat) + (lng - clng))) {
   
           cc = arrayItem.city ;
           clat = arrayItem.lat ;
           clng = arrayItem.lng  ;
           
         }
   
     });

     (document.getElementById('currentposition') as HTMLFormElement).innerHTML = 
     '<img src="/assets/img/location.png" width="15" height="20" class="d-inline-block align-top"alt=""> ' + cc ;

    });
  } else {
    console.log("No support for geolocation")
  }





 
   
}