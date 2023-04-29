import { Component, Input, OnInit } from '@angular/core';
import { Istudents } from 'src/app/shared/model/std';
import { StdtableService } from 'src/app/shared/service/stdtable.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
 stdArrayN : Array<Istudents> = []
 flag  : boolean = false
 constructor(private _stdtableService : StdtableService) { }

 ngOnInit(): void {
   this.stdArrayN = this._stdtableService.getallstd()
   console.log(this.stdArrayN)
 }
 onRemove(id : string, name : string){
  this._stdtableService.removeStudent(id,name)
 }
//  ondone(){
//   this.flag = !this.flag
//  }


  displayedColumns: string[] = [ 'fname', 'lname', 'email', 'contact', 'edit', 'delete'];

  dataSource = this.stdArrayN;

 
}



