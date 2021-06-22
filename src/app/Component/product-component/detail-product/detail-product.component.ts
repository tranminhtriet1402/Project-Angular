import { Route } from '@angular/compiler/src/core';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/API/category.service';
import { ProductService } from 'src/app/API/product.service';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  idProduct: number;
  product: Product = {};
  nameCate: string;
  urlImage: string = 'https://localhost:44370/';

  array: Product[] = [];
  slice: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Subcribe khi id change
    this.route.paramMap.subscribe((params: any) => {
      this.idProduct = +params.get('id');
      this.getDetailProduct();
      window.scroll(0, 0);
    });
    this.getProduct();
  }

  getDetailProduct() {
    if (this.idProduct) {
      this.productService.getProuctID(this.idProduct).subscribe((res: any) => {
        if (res.success) {
          this.product = res.product[0];
          this.categoryService
            .getCategoryID(res.product[0].idCategory)
            .subscribe((response: any) => {
              if (response.success == true) {
                this.nameCate = response.cate[0].nameCategory;
              }
            });
        }
      });
    }
  }

  getProduct() {
    this.productService.getAllProuct().subscribe((res: any) => {
      if (res.success == true) {
        this.slice = res.product;
        this.array = this.slice.slice(4, 8);
        console.log();
      }
    });
  }
  detailPage(data) {
    this.router.navigate(['/detail/' + data]);
    window.scroll(0, 0);
  }
}
