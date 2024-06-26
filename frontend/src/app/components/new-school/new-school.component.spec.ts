import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchoolComponent } from './new-school.component';

describe('NewSchoolComponent', () => {
  let component: NewSchoolComponent;
  let fixture: ComponentFixture<NewSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
