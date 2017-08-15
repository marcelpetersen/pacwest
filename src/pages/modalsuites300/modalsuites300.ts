import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'modal-suites-300',
  templateUrl: 'modalsuites300.html'
})
export class ModalSuites300 {
  selectedItem: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      // this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {

  }

}
