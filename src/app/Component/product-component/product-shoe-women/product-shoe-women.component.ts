import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/API/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-shoe-women',
  templateUrl: './product-shoe-women.component.html',
  styleUrls: ['./product-shoe-women.component.scss'],
})
export class ProductShoeWomenComponent implements OnInit {
  products: Product[];
  pageSize: number = 10;
  currentPage: number = 1;
  urlImage: string = 'https://localhost:44370/';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllproduct();
  }
  getAllproduct() {
    this.productService.getAllProductOnCate(7).subscribe((res: any) => {
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
