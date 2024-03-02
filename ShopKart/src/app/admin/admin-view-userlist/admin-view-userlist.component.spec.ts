import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserlistComponent } from './admin-view-userlist.component';

describe('AdminViewUserlistComponent', () => {
  let component: AdminViewUserlistComponent;
  let fixture: ComponentFixture<AdminViewUserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewUserlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
