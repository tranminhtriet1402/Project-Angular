import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/API/product.service';
import { Product } from 'src/app/Models/product';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  product: Product[];
  id_product: number;

  title: string;
  isOpen: boolean;

  urlImage: string = 'https://localhost:44370/';

  //confirm
  isOpenConfrim: boolean;
  titleConfirm: string;

  //Pagin
  pageSize: number = 10;
  currentPage: number = 1;
  indexArray: number = 0;
  pageSizes: PageOption[] = [
    { value: 5, viewValue: '10' },
    { value: 10, viewValue: '15' },
    { value: 15, viewValue: '20' },
  ];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllProduct();
  }
  open(id) {
    this.isOpen = true;
    if (id) {
      this.title = 'Chỉnh sửa thông tin ';
      this.id_product = id;
    } else {
      this.isOpen = true;
      this.id_product = 0;
      this.title = 'Thêm mới';
    }
  }
  close(data: any) {
    if (!data) {
      this.isOpen = false;
      this.isOpenConfrim = false;
      this.id_product = 0;
    }
  }
  edmitModal(res) {
    if (res) {
      if (res.success == true) {
        this.getAllProduct();
        this.isOpen = false;
      }
    } else {
      this.getAllProduct();
      this.isOpen = false;
    }
  }
  //Del
  del(id) {
    this.id_product = id;
    this.title = 'Xóa sản phẩm ';
    this.isOpenConfrim = true;
  }
  confirmDel(res) {
    if (res == true) {
      this.productService
        .deleteProductID(this.id_product)
        .subscribe((res: any) => {
          if (res.success == true) {
            this.id_product = 0;
            this.toastr.success(res.message);
            this.isOpenConfrim = false;
            this.getAllProduct();
          } else {
            this.toastr.error(res.message);
            this.isOpenConfrim = false;
          }
        });
    } else {
      this.isOpenConfrim = false;
    }
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((res: any) => {
      if (res.success == true) {
        this.product = res.product as Product[];
        console.log(this.product);
      }
    });
  }
  //Paging
  pageChanged(data) {
    this.currentPage = data;
    this.indexArray = 0;
    if (this.currentPage == 1) {
      this.indexArray = 0;
    } else {
      this.indexArray = (this.currentPage - 1) * this.pageSize;
    }
  }
  changePageSize($event) {
    console.log($event);
  }
}

interface PageOption {
  value: number;
  viewValue: string;
}
