import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

constructor() { }

serchbyName(){
  var getname = this.getContacts();
  var sortname = [];

  for(var name in getname){
    sortname.push(getname[name].fullname)
  }
  return sortname
}

getContacts(){
  return JSON.parse(localStorage.getItem('contactlist')) || [];
}

}
