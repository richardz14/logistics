import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient,HttpHeaders,HttpParams,HttpClientModule } from '@angular/common/http';

/** plugins */
import { IonicStorageModule } from '@ionic/storage';

/** page components */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DeliveryOrdersPage } from '../pages/delivery-orders/delivery-orders';
import { DeliveryStatusPage } from '../pages/delivery-status/delivery-status';
import { EmployersPage } from '../pages/employers/employers';
import { MapTrackPage } from '../pages/map-track/map-track';
import { ProfilePage } from '../pages/profile/profile'; 
import { SettingsPage } from '../pages/settings/settings';
import { TrucksPage } from '../pages/trucks/trucks';

/** directives */
import { HideHeaderDirective } from '../directives/hide-header/hide-header';

/** providers */
import { ApiSettingsProvider } from '../providers/api-settings/api-settings';
import { ApiRequestProvider } from '../providers/api-request/api-request';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DeliveryOrdersPage,
    DeliveryStatusPage,
    EmployersPage,
    MapTrackPage,
    ProfilePage,
    SettingsPage,
    TrucksPage,
    HideHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DeliveryOrdersPage,
    DeliveryStatusPage,
    EmployersPage,
    MapTrackPage,
    ProfilePage,
    SettingsPage,
    TrucksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiSettingsProvider,
    ApiRequestProvider,
    HttpClientModule
  ]
})
export class AppModule {}
