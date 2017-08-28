import { Component } from '@angular/core';
import { StatusBar } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    StatusBar.styleBlackTranslucent();
    console.log(StatusBar);
  }

  ionViewDidLeave() {
    StatusBar.styleDefault();
    console.log(StatusBar);
  }


}
