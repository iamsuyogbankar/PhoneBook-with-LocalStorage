import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent implements OnInit {
  contactForm: FormGroup;
  public allcontacts:any = [];

  constructor(private fb: FormBuilder, private shareService: ShareService) {       
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required]],
      mobilenumber: ['',[Validators.required, Validators.pattern("^[0-9]*$"),
                      Validators.minLength(10),Validators.maxLength(10)]]
    });
  }

  ngOnInit(){  
    console.log('allContacts',this.allcontacts) 
  }

  addToContact(){
    // localStorage.clear();
    var previouscontact = JSON.parse(localStorage.getItem('contactlist')) || [];
    var count = previouscontact.length;

    if(count < 1)
    {
      var id = 1;
    }
    else
    {
      var id = ++count;
    }

    var contact = {
      'id': id,
      'fullname': this.contactForm.value.fullname,
      'mobilenumber': this.contactForm.value.mobilenumber
    }

    previouscontact.push(contact);

    localStorage.setItem('contactlist', JSON.stringify(previouscontact));
    this.allcontacts =  localStorage.setItem('contactlist', JSON.stringify(previouscontact));
    this.contactForm.reset();
    console.log('allContacts',this.allcontacts)
  }
} 

