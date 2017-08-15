import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'modal-suites-1220',
  templateUrl: 'modalsuites1220.html'
})
export class ModalSuites1220 {
  selectedItem: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      // this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
