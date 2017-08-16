import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';

import { ModalSuites2700 } from '../modalsuites2700/modalsuites2700';
import { ModalSuites2600 } from '../modalsuites2600/modalsuites2600';
import { ModalSuites2250 } from '../modalsuites2250/modalsuites2250';
import { ModalSuites2230 } from '../modalsuites2230/modalsuites2230';
import { ModalSuites2220 } from '../modalsuites2220/modalsuites2220';
import { ModalSuites2050 } from '../modalsuites2050/modalsuites2050';
import { ModalSuites1450 } from '../modalsuites1450/modalsuites1450';
import { ModalSuites1440 } from '../modalsuites1440/modalsuites1440';
import { ModalSuites1220 } from '../modalsuites1220/modalsuites1220';
import { ModalSuites790 } from '../modalsuites790/modalsuites790';
import { ModalSuites740 } from '../modalsuites740/modalsuites740';
import { ModalSuites730 } from '../modalsuites730/modalsuites730';
import { ModalSuites400 } from '../modalsuites400/modalsuites400';
import { ModalSuites300 } from '../modalsuites300/modalsuites300';


@Component({
  selector: 'page-floor-plans',
  templateUrl: 'floor-plans.html'
})
export class FloorPlansPage {


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loading: LoadingController) {

  }

  presentModal2700() {
    let modal2700 = this.modalCtrl.create(ModalSuites2700);
    modal2700.present();
  }
  presentModal2600() {
    let modal2600 = this.modalCtrl.create(ModalSuites2600);
    modal2600.present();
  }
  presentModal2250() {
    let modal2250 = this.modalCtrl.create(ModalSuites2250);
    modal2250.present();
  }
  presentModal2230() {
    let modal2230 = this.modalCtrl.create(ModalSuites2230);
    modal2230.present();
  }
  presentModal2220() {
    let modal2220 = this.modalCtrl.create(ModalSuites2220);
    modal2220.present();
  }
  presentModal2050() {
    let modal2050 = this.modalCtrl.create(ModalSuites2050);
    modal2050.present();
  }
  presentModal1450() {
    let modal1450 = this.modalCtrl.create(ModalSuites1450);
    modal1450.present();
  }
  presentModal1440() {
    let modal1440 = this.modalCtrl.create(ModalSuites1440);
    modal1440.present();
  }
  presentModal1220() {
    let modal1220 = this.modalCtrl.create(ModalSuites1220);
    modal1220.present();
  }
  presentModal790() {
    let modal790 = this.modalCtrl.create(ModalSuites790);
    modal790.present();
  }
  presentModal740() {
    let modal740 = this.modalCtrl.create(ModalSuites740);
    modal740.present();
  }
  presentModal730() {
    let modal730 = this.modalCtrl.create(ModalSuites730);
    modal730.present();
  }
  presentModal400() {
    let modal400 = this.modalCtrl.create(ModalSuites400);
    modal400.present();
  }
  presentModal300() {
    let modal300 = this.modalCtrl.create(ModalSuites300);
    modal300.present();
  }


  ionViewDidLoad() {
    let loader = this.loading.create({
      content: 'Getting current availabilities...',
      duration: 1000
    });
    loader.present();
  }

}
