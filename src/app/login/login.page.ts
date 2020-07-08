import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {from} from 'rxjs';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,  private storage: Storage,private http: HttpClient) { }

  ngOnInit() {
  }

  login(usuario,password){

    let data = [
      usuario,password
    ];

    /*
let apiurl ='https://delivery.sydgps.cl/traccar/rest/login?payload=["'+usuario+'","'+password+'"]'
  console.log(apiurl)

fetch(
  apiurl,
  {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET', // GET, POST, PUT, DELETE

  }
).then(resonse => {
  console.log(resonse)
console.log("PULENTP")
}).catch(error => {
  console.log("ERROR")
});

*/

let h =  new HttpHeaders({
  'Access-Control-Allow-Origin': '*'
})
this.http.post('https://delivery.sydgps.cl/traccar/rest/login',data,{headers: h}).subscribe(data => {
  console.log(data);
console.log(data.data); // data received by server
console.log(data.headers);
})
/*
    this.http.get('https://delivery.sydgps.cl/traccar/rest/login?payload=["'+usuario+'","'+password+'"]').subscribe((resp:any) => {
      console.log(resp);
      if (resp==null){
        console.log("NULLL");
        this.router.navigate(['/login'])
      }
      else{

          this.router.navigate(['/home'])
      }




    },err=>{
      console.log("ERROR")

    }
    )
*/


  }
  /*
  getData(apiurl): Observable<any>{



  }
  */
}
