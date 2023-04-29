import { Injectable } from '@angular/core';
import { Istudents } from '../model/std';
import { SnackBarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StdtableService {

  
  stdArray : Array<Istudents> = [
    {
      fname :"Virat",
      lname : "Kohil",
      email : "Vkohil@gmail.com",
      contact : 9000001873,
      id : "qefydfghdhgd"
    },
    {
      fname :"Umesh",
      lname : "Yadav",
      email : "umeshyad1@gmail.com",
      contact : 8888851474,
      id : "qefydfghdhgd"
    },
    {
      fname :"Rohith",
      lname : "Sharma",
      email : "shaRohith@gmail.com",
      contact : 8769032654,
      id : "qefydfghdhgd"
    },
    {
      fname :"Suresh",
      lname : "Raina",
      email : "suresh234@gmail.com",
      contact : 7658954367,
      id : "qefydfghdhgd"
    }
  ]
  constructor(private _snackBarService : SnackBarService) { }

  getallstd(){
    return this.stdArray
  }

  addstudent(std : Istudents){
    this.stdArray.push(std)
    this._snackBarService.openSnackBar(`${std.fname} is Added Successfully`)

  }
  removeStudent(id : string, name : string){
    let stdIndex = this.stdArray.findIndex(std => std.id === id)
    this.stdArray.splice(stdIndex,1)
    this._snackBarService.openSnackBar(`${name} is Deleted Successfully`)
  }
 
}
