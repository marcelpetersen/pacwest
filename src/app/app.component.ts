import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Settings } from '../providers/providers';

import { FirstRunPage } from '../pages/pages';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { FuturePage } from '../pages/future/future';
import { FloorPlansPage } from '../pages/floor-plans/floor-plans';
import { LocationPage } from '../pages/location/location';
import { VitalsPage } from '../pages/vitals/vitals';
import { GalleryPage } from '../pages/gallery/gallery';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: TutorialPage },
    { title: 'Tabs',     component: TabsPage },
    { title: 'Menu',     component: MenuPage },
    { title: 'Home',     component: HomePage },
    { title: 'Future',   component: FuturePage },
    { title: 'Floors',   component: FloorPlansPage },
    { title: 'Location', component: LocationPage },
    { title: 'Vitals',   component: VitalsPage },
    { title: 'Gallery',  component: GalleryPage }
  ]

  constructor(translate: TranslateService, platform: Platform, settings: Settings, config: Config) {
    // Set the default language for translation strings, and the current language.
    translate.setDefaultLang('en');
    translate.use('en')

    translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
