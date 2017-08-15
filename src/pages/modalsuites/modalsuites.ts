import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'modal-suites',
  templateUrl: 'modalsuites.html'
})
export class ModalSuites {
  selectedItem: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      // this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
