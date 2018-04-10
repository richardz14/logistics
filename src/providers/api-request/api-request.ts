import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/* Providers */
import { ApiSettingsProvider } from '../api-settings/api-settings';

@Injectable()
export class ApiRequestProvider {

  constructor(public http: HttpClient, private apiSettings: ApiSettingsProvider) {
    //console.log('Hello ApiRequestProvider Provider');
  }

/* 
  * Post
  * @link - The link to where you want to request API
  * @data - Post data
  * @options - Headers
  */
 post(link:string, data:{}){
  return new Promise((resolve, reject) => {
    // .. Headers
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    
    // .. Body
    let body = new HttpParams();
    for(let i in data){
      if(data[i] != undefined)
        body = body.append(i, data[i]);
    }
    // .. Do rRequest
    this.http.post(    
      this.apiSettings.getApiUrl() + link,
      body,
      { 
        headers: headers
      }
    )
    .subscribe((res) => { resolve(res); }, (err) => { reject(err) });
  });
}

get(link:string, options){
  // .. Headers
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  // .. Body
  let body = new HttpParams();
  for(let i in options){
    if(options[i] != undefined)
      body = body.append(i, options[i]);
  }

  return new Promise((resolve, reject) => {
    this.http.get(
      this.apiSettings.getApiUrl() + link, {
        headers: headers,
        responseType : "json"
      }
    ).subscribe((res) => resolve(res), (err) => reject(err));
  });
}

}
