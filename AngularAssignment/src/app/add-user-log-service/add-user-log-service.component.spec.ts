import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserLogServiceComponent } from './add-user-log-service.component';

describe('AddUserLogServiceComponent', () => {
  let component: AddUserLogServiceComponent;
  let fixture: ComponentFixture<AddUserLogServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserLogServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserLogServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
