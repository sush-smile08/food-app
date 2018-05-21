import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

@Pipe({name: 'arrayFilter'})
 export class FilterPipe implements PipeTransform {
  transform(array : any[], filterFrom: any[]: any{
      return array.filter((item, index) => item.value == filterFrom[index].value);
  })
} 