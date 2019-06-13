import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-of-contact',
  templateUrl: './list-of-contact.component.html',
  styleUrls: ['./list-of-contact.component.css']
})
export class ListOfContactComponent implements OnInit {

public viewcontact = []; //all contacts data from localstorage
public confirm; //used for delete contact
public values; //onkeyup values for search
public  contactList; //hold all names

public searchText;


constructor(private shareService: ShareService, private router: Router) {  
  this.contactList = this.shareService.serchbyName();  // name of localStorage data
}

ngOnInit() { 
  this.viewcontact = this.shareService.getContacts(); //all data of localStorage
  
}


// searchContact(event: any){
// this.values = event.target.value;
// console.log('values', this.values)
// }

 onDelete(id){
  this.confirm = confirm("Do you really want to delete this record?");
  if(this.confirm == true)
  {
    var previouscontact = JSON.parse(localStorage.getItem('contactlist'));   
    this.confirm = previouscontact.findIndex(m => m.id === id);
    this.viewcontact.splice(this.confirm, 1);
    localStorage.setItem('contactlist', JSON.stringify(this.viewcontact));
    console.log('deleteddata',previouscontact);  
  }
  else{
    return false;
  }
}
}
