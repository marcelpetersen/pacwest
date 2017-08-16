import { Component, ViewChild }      from '@angular/core';
import { NavController, Slides, LoadingController }  from 'ionic-angular';


@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  // galleryImages: any[];
  selectedGallery: string;
  public slider: any;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public loading: LoadingController) {
    this.selectedGallery = 'exterior';

  }

  // Go To Slide Index
  // slideToZero() {
  //   this.slides.slideTo(0, 400);
  // }
  // slideToOne() {
  //   this.slides.slideTo(1, 400);
  // }
  // slideToTwo() {
  //   this.slides.slideTo(2, 400);
  // }
  // slideToThree() {
  //   this.slides.slideTo(3, 400);
  // }
  // slideToFour() {
  //   this.slides.slideTo(4, 400);
  // }
  // slideToFive() {
  //   this.slides.slideTo(5, 400);
  // }
  // slideToSix() {
  //   this.slides.slideTo(6, 400);
  // }
  // slideToSeven() {
  //   this.slides.slideTo(7, 400);
  // }


  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
  }

  presentLoading(){
    let loader = this.loading.create({
      content: 'Loading Gallery...'
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
