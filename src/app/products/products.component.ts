import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import {  ProductsService } from './products.service';
import { Pipe, PipeTransform } from '@angular/core';
import { GroupByPipe } from './../groupby.pipe';     


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsService ],
  //pipes: [ GroupByPipe ]
})
export class ProductsComponent implements OnInit {
  appsName ;
  headers: string[];
  config ;
  msg ;
  nCnt: number= 0;

  ngOnInit() {
  }

  constructor(private ProductsService: ProductsService) {
    this.showConfigResponse();
  }


  showConfig() {
    this.ProductsService.getlist()
      .subscribe((data: Config) => this.appsName = {
        heroesUrl: data['heroesUrl']
    });
  }
  showConfigResponse() {
    this.ProductsService.getlistResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);

        this.appsName=resp.body;
        this.config = { ... resp.body };  
        //console.log(this.appsName);
        //console.log(this.config.heroesUrl);
      });
  }
  clickMe(i){
    this.nCnt = this.nCnt + 1;
    this.msg = this.nCnt;
  }
  mins(i){
    this.nCnt = this.nCnt -1;
    this.msg = this.nCnt;
    if(this.nCnt <= 0){
      this.nCnt = 1;
    }
  }

  

}
