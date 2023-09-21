import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictEditItemComponent } from './predict-edit-item.component';

describe('PredictEditItemComponent', () => {
  let component: PredictEditItemComponent;
  let fixture: ComponentFixture<PredictEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictEditItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
