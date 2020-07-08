import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public storage: Storage,    public geolocation: Geolocation,
      private backgroundGeolocation: BackgroundGeolocation) {

    this.storage.get("status").then(val => {
      console.log(val)

      const config: BackgroundGeolocationConfig = {
                  desiredAccuracy: 10,
                  stationaryRadius: 20,
                  distanceFilter: 30,
                  interval:100,
                  debug: true, //  enable this hear sounds for background-geolocation life-cycle.
                  stopOnTerminate: false, // enable this to clear background location settings when the app terminates
          };




const source = interval(10000);
const subscribe = source.subscribe(inter => {
              console.log(val)
              if (val==true){
                  console.log("Esta en TRUE")
                  this.geolocation.getCurrentPosition().then((resp) => {

                  }).catch((error) => {
                    console.log("ERROR DE GEO", error);
                  })
this.backgroundGeolocation.start();
                  this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
                      console.log("BACKGRAOUND GEO")
                        console.log(location.id)
                        console.log(location.provider)
                        console.log(location.time)
                        console.log(location.latitude)
                        console.log(location.longitude)
                  this.backgroundGeolocation.stop();
                  })
              }
              else{
                console.log("ESTA EN FALSE DETENIENDO")
                this.backgroundGeolocation.stop();
              }






    })
    })



  }

  cambiaEstado(event){
    console.log(event.detail.checked)
    this.storage.set('status',event.detail.checked)
  }

}
