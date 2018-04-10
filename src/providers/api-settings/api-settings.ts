import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiSettingsProvider {
    // Development
  private apiUrl:string = 'http://localhost/logistics/logisticsBack/api/';
  private apiUrlUpload:string = 'http://192.168.1.4/jobPortal/filappx-backoffice/uploads/';

  constructor(public http: HttpClient) {
    console.log('Hello ApiSettingsProvider Provider');
  }

  getApiUrl(){
    return this.apiUrl;
  }
  getApiUrlUpload(){
    return this.apiUrlUpload;
  }

}
