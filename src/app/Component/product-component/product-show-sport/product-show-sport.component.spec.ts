import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowSportComponent } from './product-show-sport.component';

describe('ProductShowSportComponent', () => {
  let component: ProductShowSportComponent;
  let fixture: ComponentFixture<ProductShowSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShowSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
