import { Component, OnInit } from '@angular/core';
import { Istudents } from 'src/app/shared/model/std';
import { StdtableService } from 'src/app/shared/service/stdtable.service';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor(private _utilityService : UtilityService, private _stdtableService : StdtableService) { }

  ngOnInit(): void {
  }
  onstudentAdd(name : HTMLInputElement, lname : HTMLInputElement, email: HTMLInputElement, contact : HTMLInputElement){
    if(name.value.length > 0 && lname.value.length > 0  && email.value.length > 0 && contact.value.length > 0 ){
      let std : Istudents ={
        fname : name.value,
        lname : lname.value,
        email: email.value,
        contact : +contact.value,
        id : this._utilityService.uuid()
      }
      this._stdtableService.addstudent(std)
      name.value = "";
      lname.value = "";
      email.value = "";
      contact.value = "";
    }
  }
}
