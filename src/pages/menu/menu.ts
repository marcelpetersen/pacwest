import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = ContentPage;
  rootPage: any = TabsPage;
  index: number;


  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    //this.pages = [
    //  { title: 'Sign in', component: LoginPage },
    //  { title: 'Signup', component: SignupPage }
    //];
  }

  //ionViewDidLoad() {
  //  console.log('Hello MenuPage Page');
  //}

  openPage(page) {
     // Reset the content nav to have just this page
     // we wouldn't want the back button to show in this scenario
     this.nav.setRoot(page.component, {tabIndex: this.index});
   }
}
