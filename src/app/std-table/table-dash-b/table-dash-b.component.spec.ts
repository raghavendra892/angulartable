import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDashBComponent } from './table-dash-b.component';

describe('TableDashBComponent', () => {
  let component: TableDashBComponent;
  let fixture: ComponentFixture<TableDashBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDashBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDashBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
