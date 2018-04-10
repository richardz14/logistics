import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

/**plugins */
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/** providers */
import { ApiRequestProvider } from '../../providers/api-request/api-request';
/** pages */
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  public loginForm: any;
  username: AbstractControl;
   password: AbstractControl;
   private loginusernameError:String = '';
   private loginpasswordError:String = '';
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private apiRequest:ApiRequestProvider,
    private storage: Storage,
    private alertCtrl: AlertController) {
     
      this.initializeFormlogin();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
   
  }
  initializeFormlogin(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.username = this.loginForm.contains['username'];
    this.password = this.loginForm.contains['password'];
  }
  openResetPassword() {
    console.log('Reset password clicked');
  }
  doLogin() {
    if (!this.loginForm.valid) {
      console.log('Invalid or empty data');
    } else {
      const user = this.loginForm.value.username;
      const userPassword = this.loginForm.value.password;
      this.apiRequest.post('auth/login',{username: user, password: userPassword}).then((data) => {
        if(data['status'] == 0){
          this.errorToLoginValidation(data['errors']);
        }else if(data['status'] == -1){
          this.errorToLoginMessage( data['message']);
        }else{
          this.storage.set('user', data['user']);
          this.navCtrl.setRoot(HomePage);
        }
      },(error) => {

      });
      //console.log('user data', user, userPassword);

    }
  }

  errorToLoginMessage(message){
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          this.loginForm.controls['password'].setValue("");
        }
      }],
      cssClass: 'alertDanger'
    });
    alert.present();
   }
   errorToLoginValidation(errors){
    this.loginusernameError = errors.username;
    this.loginpasswordError = errors.password;
 }
}
