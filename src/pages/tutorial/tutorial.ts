import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

export const MainPage = TabsPage;

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  // slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    // translate.get(["TUTORIAL_SLIDE1_TITLE",
    //                "TUTORIAL_SLIDE1_DESCRIPTION",
    //               //  "TUTORIAL_SLIDE2_TITLE",
    //               //  "TUTORIAL_SLIDE2_DESCRIPTION",
    //               //  "TUTORIAL_SLIDE3_TITLE",
    //               //  "TUTORIAL_SLIDE3_DESCRIPTION",
    // ])
    // .subscribe((values) => {
      // console.log('Loaded values', values);
      // this.slides = [
        // {
        //   // title: values.TUTORIAL_SLIDE1_TITLE,
        //   title: 'TRANS' + '<span class="primary">' + 'FORMED' + '</span>',
        //   description: 'Building on a tradition of excellence.',
        //   image: 'assets/img/pacwest_primary.svg',
        // }
        // {
        //   // title: values.TUTORIAL_SLIDE2_TITLE,
        //   title: 'Experience the Transformation',
        //   description: values.TUTORIAL_SLIDE2_DESCRIPTION,
        //   image: 'assets/img/ica-slidebox-img-2.png',
        // },
        // {
        //   title: values.TUTORIAL_SLIDE3_TITLE,
        //   description: values.TUTORIAL_SLIDE3_DESCRIPTION,
        //   image: 'assets/img/ica-slidebox-img-3.png',
        // }
      // ];
    // });
  }

  startApp() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    // this.menu.enable(true);
    this.menu.enable(false);
  }

}
