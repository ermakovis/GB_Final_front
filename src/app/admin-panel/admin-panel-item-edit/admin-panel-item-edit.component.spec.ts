import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelItemEditComponent } from './admin-panel-item-edit.component';

describe('AdminPanelItemEditComponent', () => {
  let component: AdminPanelItemEditComponent;
  let fixture: ComponentFixture<AdminPanelItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
