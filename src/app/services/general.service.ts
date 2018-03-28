import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './constants';

@Injectable()
export class GeneralService {
  token: any;
  userId: any;
  headers: any;
  options: any;

  private apiUrl = this.appConfig.API_URL_PROD;

  private headerss = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })};
  private headersss = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};


  constructor(public http: HttpClient, private appConfig: AppConfig) {

  }

  createHeader(token) {
    this.headers = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'token': token })};
  }

  login(params){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'landing/login', params, this.headerss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  register(params){
    return new Promise((resolve, reject) => {
      this.http.post('https://endpoint.scribesoft.com/v1/orgs/27038/requests/5625?accesstoken=8d0e3e43-a352-409a-bbee-401e2ee99b9f', params, this.headersss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  registerPromo(params){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'landing/register-promotion', params, this.headerss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  registerSolo(params){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'landing/register-solo', params, this.headerss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  search(params){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'landing/search', params, this.headerss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  searchInbound(params){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'landing/search-inbound', params, this.headerss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  validInput(params){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'landing/valid-input', params, this.headerss)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
