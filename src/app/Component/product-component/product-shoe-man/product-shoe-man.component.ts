import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/API/category.service';
import { ProductService } from 'src/app/API/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-shoe-man',
  templateUrl: './product-shoe-man.component.html',
  styleUrls: ['./product-shoe-man.component.scss'],
})
export class ProductShoeManComponent implements OnInit {
  products: Product[];
  pageSize: number = 10;
  currentPage: number = 1;
  urlImage: string = 'https://localhost:44370/';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllproduct();
  }

  getAllproduct() {
    this.productService.getAllProductOnCate(11).subscribe((res: any) => {
      if (res.success == true) {
        this.products = res.product as Product[];
        console.log(res);
      }
    });
  }
  //paging
  pageChanged(data) {
    window.scroll(0, 0);
    this.currentPage = data;
  }
  changePageSize($event) {
    console.log($event);
  }
}
