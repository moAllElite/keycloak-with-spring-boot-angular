import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolCardComponent } from './shool-card.component';

describe('ShoolCardComponent', () => {
  let component: ShoolCardComponent;
  let fixture: ComponentFixture<ShoolCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoolCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
