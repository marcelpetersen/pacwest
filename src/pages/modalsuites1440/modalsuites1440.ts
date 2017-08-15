import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'modal-suites-1440',
  templateUrl: 'modalsuites1440.html'
})
export class ModalSuites1440 {
  selectedItem: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      // this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
