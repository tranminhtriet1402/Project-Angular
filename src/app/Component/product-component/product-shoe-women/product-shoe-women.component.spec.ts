import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoeWomenComponent } from './product-shoe-women.component';

describe('ProductShoeWomenComponent', () => {
  let component: ProductShoeWomenComponent;
  let fixture: ComponentFixture<ProductShoeWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShoeWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShoeWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
