import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/API/product.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  isOpen: boolean;
  array: Product[];
  product: Product[];
  id_product: number;
  title: string;

  urlImage: string = 'https://localhost:44370/';

  isOpenConfrim: boolean;
  titleConfirm: string;
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
        .deleteProuctID(this.id_product)
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
    this.productService.getAllProuct().subscribe((res: any) => {
      if (res.success == true) {
        this.product = res.product as Product[];
        console.log(this.product);
      }
    });
  }
}
