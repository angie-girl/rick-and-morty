import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditFormComponent } from './character-edit-form.component';

describe('CharacterEditFormComponent', () => {
  let component: CharacterEditFormComponent;
  let fixture: ComponentFixture<CharacterEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
