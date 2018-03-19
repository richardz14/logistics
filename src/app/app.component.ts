import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  public pages: Array<{title: string,ismenu: number, icon: string, component: any}>;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.loadSideMenu();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  loadSideMenu(){
    this.pages = [
      { title: 'Home',ismenu: 1,icon: 'home', component: HomePage },
    ];
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.profilePicUrl_sidebar = this.appSettings.profilePicUrl_sidebar;  

    if(page.ismenu == 1){
      this.nav.setRoot(page.component);
    }else{
     // this.logout(page.component);
    }
    this.menuCtrl.close();
  }


}

