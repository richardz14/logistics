import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/** components */
import { DeliveryOrdersPage } from '../../pages/delivery-orders/delivery-orders';
import { DeliveryStatusPage } from '../../pages/delivery-status/delivery-status';
import { EmployersPage } from '../../pages/employers/employers';
import { MapTrackPage } from '../../pages/map-track/map-track';
import { SettingsPage } from '../../pages/settings/settings';
import { TrucksPage } from '../../pages/trucks/trucks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    //this.goToSlide();
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  } 

  slideChanged() {
    //let currentIndex = this.slides.getActiveIndex();
    //console.log('Current index is', currentIndex);
  }

  viewOnMap(){
    this.navCtrl.push(MapTrackPage);
  }
  carListing(){
    this.navCtrl.push(TrucksPage);
  }
  pendingProducts(){
      //this.navCtrl.push(TrucksPage);
      alert("on process");
  }
  employersList(){
    this.navCtrl.push(EmployersPage);
  }
  DeliveryStatus(){
    this.navCtrl.push(DeliveryStatusPage);
  }
  DeliveryOrders(){
    this.navCtrl.push(DeliveryOrdersPage);
  }
}
