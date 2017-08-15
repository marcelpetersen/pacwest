import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// import { ItemDetailPage } from '../item-detail/item-detail';
// import { ItemCreatePage } from '../item-create/item-create';

import { ModalSuites } from '../modalsuites/modalsuites';
import { ModalSuites2600 } from '../modalsuites2600/modalsuites2600';
// import { ModalSuites2600 } from '../pages/modalsuites/modalsuites2600';
//
// import { ModalSuites2250 } from '../pages/modalsuites/modalsuites2250';
// import { ModalSuites2230 } from '../pages/modalsuites/modalsuites2230';
// import { ModalSuites2220 } from '../pages/modalsuites/modalsuites2220';
//
// import { ModalSuites2050 } from '../pages/modalsuites/modalsuites2050';
//
// import { ModalSuites1450 } from '../pages/modalsuites/modalsuites1450';
// import { ModalSuites1440 } from '../pages/modalsuites/modalsuites1440';
//
// import { ModalSuites1220 } from '../pages/modalsuites/modalsuites1220';
//
// import { ModalSuites790 } from '../pages/modalsuites/modalsuites790';
// import { ModalSuites740 } from '../pages/modalsuites/modalsuites740';
// import { ModalSuites730 } from '../pages/modalsuites/modalsuites730';
//
// import { ModalSuites400 } from '../pages/modalsuites/modalsuites400';
// import { ModalSuites300 } from '../pages/modalsuites/modalsuites300';

// import { Items } from '../../providers/providers';
// import { Item } from '../../models/item';

@Component({
  selector: 'page-floor-plans',
  templateUrl: 'floor-plans.html'
})
export class FloorPlansPage {
  private modalSuites;
  // currentItems: Item[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    //public items: Items,
    // this.currentItems = this.items.query();
    this.modalSuites = ModalSuites;
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalSuites);
    modal.present();
  }

  presentModal2600() {
    let modal2600 = this.modalCtrl.create(ModalSuites2600);
    modal2600.present();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  // addItem() {
  //   let addModal = this.modalCtrl.create(ItemCreatePage);
  //   addModal.onDidDismiss(item => {
  //     if (item) {
  //       this.items.add(item);
  //     }
  //   })
  //   addModal.present();
  // }

  /**
   * Delete an item from the list of items.
   */
  // deleteItem(item) {
  //   this.items.delete(item);
  // }

  /**
   * Navigate to the detail page for this item.
   */
  // openItem(item: Item) {
  //   this.navCtrl.push(ItemDetailPage, {
  //     item: item
  //   });
  // }
}
