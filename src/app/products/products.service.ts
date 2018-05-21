import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
    heroesUrl;
  }
  

@Injectable()

export class ProductsService {

  constructor(private http: HttpClient) { }  
    //configUrl = 'assets/config.json';
    configUrl = 'https://thesmartq.firebaseio.com/menu.json';
    getlist() {
        var temp = this.http.get(this.configUrl);
        //console.log(temp);
        return temp;
    }
    getlistResponse(): Observable<HttpResponse<Config>> {
      return this.http.get<Config>(
        this.configUrl, { observe: 'response' });
    }
}
