import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregpageComponent } from './userregpage.component';

describe('UserregpageComponent', () => {
  let component: UserregpageComponent;
  let fixture: ComponentFixture<UserregpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserregpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserregpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
