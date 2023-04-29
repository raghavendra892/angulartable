import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDashBComponent } from './table-dash-b/table-dash-b.component';
import { StdFormComponent } from './table-dash-b/std-form/std-form.component';
import { StdTableComponent } from './table-dash-b/std-table/std-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    TableDashBComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports :[TableDashBComponent]
})
export class StdTableModule { }
