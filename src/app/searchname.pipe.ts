import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchname'
})
export class SearchnamePipe implements PipeTransform {
public pipecontact = [] = JSON.parse(localStorage.getItem('contactlist'));

transform(pipecontact: any[], searchname:  string): any {
  return null;
  }

}
