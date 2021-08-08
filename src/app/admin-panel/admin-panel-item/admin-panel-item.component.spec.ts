import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelItemComponent } from './admin-panel-item.component';

describe('AdminPanelItemComponent', () => {
  let component: AdminPanelItemComponent;
  let fixture: ComponentFixture<AdminPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
