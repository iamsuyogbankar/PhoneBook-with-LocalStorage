import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareService } from '../share.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  updateForm: FormGroup
  public filterData = [];
  public contactid;

  constructor(private fb: FormBuilder, private shareService: ShareService,
              private activateRoute: ActivatedRoute) { 
    
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
    this.contactid = parseInt(params.get('id'))
    });    
    var fetchData = this.shareService.getContacts();    
    this.filterData = fetchData.filter(m => m.id === this.contactid); 

    console.log('filterData',this.filterData);
    this.updateForm = fb.group({
    fullname: [[this.filterData[0].fullname], [Validators.required]],
    mobilenumber: [[this.filterData[0].mobilenumber], [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onupdateForm(){
    var editcontact = this.shareService.getContacts();

    var newcontact = {
      'id': this.contactid,
      'fullname': this.updateForm.value.fullname,
      'mobilenumber': this.updateForm.value.mobilenumber
    };

    var index = editcontact.findIndex(m => m.id === this.contactid);
    editcontact[index] = newcontact;
    localStorage.setItem('contactlist', JSON.stringify(editcontact));
    console.log(JSON.parse(localStorage.getItem('contactlist')));
    this.updateForm.reset();
  }

}
