import { Component, ViewChild } from '@angular/core';

import { NavController, Slides, LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-future',
  templateUrl: 'future.html'
})
export class FuturePage {
  public slider: any;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public loading: LoadingController) {

  }

  presentLoading(){
    let loader = this.loading.create({
      content: 'Loading Transformation...'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 1200);
  }

  ionViewDidLoad() {
    this.presentLoading();
  }

}
