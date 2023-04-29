import { Component, OnInit } from '@angular/core';
import { Istudents } from 'src/app/shared/model/std';
import { StdtableService } from 'src/app/shared/service/stdtable.service';

@Component({
  selector: 'app-table-dash-b',
  templateUrl: './table-dash-b.component.html',
  styleUrls: ['./table-dash-b.component.scss']
})
export class TableDashBComponent implements OnInit {
  stdArrayN : Array<Istudents> = []
  constructor(private _stdtableService : StdtableService) { }

  ngOnInit(): void {
    this.stdArrayN = this._stdtableService.getallstd()
  }

}
