import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEditFormComponent } from './location-edit-form.component';

describe('LocationEditFormComponent', () => {
  let component: LocationEditFormComponent;
  let fixture: ComponentFixture<LocationEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
