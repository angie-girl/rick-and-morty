import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeEditFormComponent } from './episode-edit-form.component';

describe('EpisodeEditFormComponent', () => {
  let component: EpisodeEditFormComponent;
  let fixture: ComponentFixture<EpisodeEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
