import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/API/category.service';
import { ProductService } from 'src/app/API/product.service';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
})
export class ProductComponentComponent implements OnInit {
  array: Product[] = [];
  slice: Product[] = [];
  urlImage: string = 'https://localhost:44370/';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.getAllProduct().subscribe((res: any) => {
      if (res.success == true) {
        this.slice = res.product;
        this.array = this.slice.slice(0, 4);
      }
    });
  }
}
