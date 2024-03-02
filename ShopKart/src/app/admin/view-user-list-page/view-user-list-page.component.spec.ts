import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserListPageComponent } from './view-user-list-page.component';

describe('ViewUserListPageComponent', () => {
  let component: ViewUserListPageComponent;
  let fixture: ComponentFixture<ViewUserListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewUserListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
