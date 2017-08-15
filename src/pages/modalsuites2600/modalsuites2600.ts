import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'modal-suites-2600',
  templateUrl: 'modalsuites2600.html'
})
export class ModalSuites2600 {
  selectedItem: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      // this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
