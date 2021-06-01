import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoeManComponent } from './product-shoe-man.component';

describe('ProductShoeManComponent', () => {
  let component: ProductShoeManComponent;
  let fixture: ComponentFixture<ProductShoeManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShoeManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShoeManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
