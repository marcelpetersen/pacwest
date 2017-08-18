import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { Tab5Root } from '../pages';
import { Tab6Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  tab6Root: any = Tab6Root;

  tab1Title = "Home";
  tab2Title = "Future";
  tab3Title = "Availabilities";
  tab4Title = "Location";
  tab5Title = "Vitals";
  tab6Title = "Gallery";

  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public translateService: TranslateService, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;

  }
}
