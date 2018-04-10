import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

/**plugins */
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;//HomePage
  @ViewChild(Nav) nav: Nav;
  public pages: Array<{title: string,ismenu: number, icon: string, component: any}>;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.loadSideMenu();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  loadSideMenu(){
    this.storage.get('user').then((val) => {
      if(val != null){
        this.menuCtrl.swipeEnable(true);
        this.rootPage = HomePage;
      }else{
        this.rootPage = LoginPage;
        this.menuCtrl.swipeEnable(false);
      }

    });
    this.pages = [
      { title: 'Home',ismenu: 1,icon: 'home', component: HomePage },
      { title: 'Profile',ismenu: 1,icon: 'information-circle', component: HomePage },
      { title: 'Settings',ismenu: 1,icon: 'md-settings', component: HomePage },
      { title: 'Logout',ismenu: 0,icon: 'ios-log-out-outline', component: LoginPage },
    ];
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   // this.profilePicUrl_sidebar = this.appSettings.profilePicUrl_sidebar;  

    if(page.ismenu == 1){
      this.nav.setRoot(page.component);
    }else{
      this.logout(page.component);
    }
    this.menuCtrl.close();
  }
  logout(component){
    this.storage.remove('user');
    this.nav.setRoot(component); 
    this.menuCtrl.swipeEnable(false);
  }

}

