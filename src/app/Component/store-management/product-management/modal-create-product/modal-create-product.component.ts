import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/API/category.service';
import { ProductService } from 'src/app/API/product.service';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-create-product',
  templateUrl: './modal-create-product.component.html',
  styleUrls: ['./modal-create-product.component.scss'],
})
export class ModalCreateProductComponent implements OnInit {
  @Input() id_product: number;
  @Input() option: boolean = true;
  @Output() emitModal = new EventEmitter();

  id_update: number;

  product: Product = {};
  categorys: Category[] = [];
  optionButton: string;

  urlImage: string = '';
  urlUpdate: any;

  urlImage1: string = '';
  urlUpdate1: any;

  urlImage2: string = '';
  urlUpdate2: any;

  urlImage3: string = '';
  urlUpdate3: any;

  formcreate = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    price: new FormControl(''),
    image: new FormControl(''),
    type_category: new FormControl('', [Validators.required]),
    descriptions: new FormControl(''),
  });
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllCate();
    if (this.id_product) {
      this.optionButton = 'Lưu';

      this.getIDProduct();
    } else {
      this.formcreate.patchValue({
        name: '',
        code: '',
        descriptions: '',
        price: '',
      });
      this.optionButton = 'Thêm';
    }
  }

  //Get api
  getIDProduct() {
    this.productService.getProductID(this.id_product).subscribe((res: any) => {
      if (res.success == true) {
        this.product = res.product[0];
        this.formcreate.patchValue({
          name: this.product.nameProduct,
          code: this.product.codeProduct,
          price: this.product.price,
          type_category: this.product.idCategory ? this.product.idCategory : '',
          descriptions: this.product.descriptions,
        });
        if (this.product.images) {
          this.urlImage = 'https://localhost:44370/' + this.product.images;
        }
        if (this.product.images1) {
          this.urlImage1 = 'https://localhost:44370/' + this.product.images1;
        }
        if (this.product.images2) {
          this.urlImage2 = 'https://localhost:44370/' + this.product.images2;
        }
        if (this.product.images3) {
          this.urlImage3 = 'https://localhost:44370/' + this.product.images3;
        }
      }
    });
  }
  addProduct() {
    var idPro;
    this.product.idCategory = this.formcreate.controls['type_category'].value;
    this.product.nameProduct = this.formcreate.controls['name'].value;
    this.product.codeProduct = this.formcreate.controls['code'].value;
    this.product.descriptions = this.formcreate.controls['descriptions'].value;
    this.product.price = this.formcreate.controls['price'].value;

    this.product.descriptions = this.formcreate.controls['descriptions'].value;
    if (this.urlUpdate) {
      this.productService.addProduct(this.product).subscribe((res: any) => {
        if (res) {
          this.id_update = res.idProduct;
          const formData: FormData = new FormData();
          formData.append('file', this.urlUpdate, this.urlUpdate.name);
          this.productService
            .updateImageProduct(res.idProduct, formData)
            .subscribe((res1: any) => {
              if (res1.success == true) {
                this.toastr.success(res1.message);
                this.edmitModal(res1);
              } else {
                this.toastr.error(res.message);
              }
            });
          if (this.urlUpdate1) {
            const formData1: FormData = new FormData();
            formData1.append('file', this.urlUpdate1, this.urlUpdate1.name);
            this.productService
              .updateImageProduct1(res.idProduct, formData1)
              .subscribe((res4: any) => {
                if (res4.success == true) {
                } else {
                }
              });
          }
          if (this.urlUpdate2) {
            const formData2: FormData = new FormData();
            formData2.append('file', this.urlUpdate2, this.urlUpdate2.name);
            this.productService
              .updateImageProduct2(res.idProduct, formData2)
              .subscribe((res2: any) => {
                if (res2.success == true) {
                } else {
                }
              });
          }
          if (this.urlUpdate3) {
            const formData3: FormData = new FormData();
            formData3.append('file', this.urlUpdate3, this.urlUpdate3.name);
            this.productService
              .updateImageProduct3(res.idProduct, formData3)
              .subscribe((res3: any) => {
                if (res3.success == true) {
                } else {
                }
              });
          }
        }
      });
    } else {
      this.toastr.warning('Bạn chưa thêm hình ảnh đại diện cho sản phẩm');
    }
  }
  updateProduct() {
    this.product.idProduct = this.id_product;
    this.product.idCategory = this.formcreate.controls['type_category'].value;
    this.product.nameProduct = this.formcreate.controls['name'].value;
    this.product.codeProduct = this.formcreate.controls['code'].value;
    this.product.descriptions = this.formcreate.controls['descriptions'].value;
    this.product.price = this.formcreate.controls['price'].value;

    this.productService
      .updateProductID(this.product.idProduct, this.product)
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          if (this.urlUpdate) {
            var formData: FormData = new FormData();
            formData.append('file', this.urlUpdate, this.urlUpdate.name);
            this.productService
              .updateImageProduct(this.id_product, formData)
              .subscribe((res: any) => {
                if (res.success == true) {
                  console.log(1);
                } else {
                }
              });
          }
          if (this.urlUpdate1) {
            var formData1: FormData = new FormData();
            formData1.append('file', this.urlUpdate1, this.urlUpdate1.name);
            this.productService
              .updateImageProduct1(this.id_product, formData1)
              .subscribe((res1: any) => {
                if (res1.success == true) {
                  console.log(2);
                } else {
                }
              });
          }
          if (this.urlUpdate2) {
            var formData2: FormData = new FormData();
            formData2.append('file', this.urlUpdate2, this.urlUpdate2.name);
            this.productService
              .updateImageProduct2(this.id_product, formData2)
              .subscribe((res2: any) => {
                if (res2.success == true) {
                  console.log(3);
                } else {
                }
              });
          }
          if (this.urlUpdate3) {
            var formData3: FormData = new FormData();
            formData3.append('file', this.urlUpdate3, this.urlUpdate3.name);
            this.productService
              .updateImageProduct3(this.id_product, formData3)
              .subscribe((res3: any) => {
                if (res3.success == true) {
                  console.log(4);
                } else {
                }
              });
          }
        }
        this.toastr.success('Thao tác thành công');
        this.edmitModal();
      });
  }
  // upImage() {
  //   var check: boolean;
  //   if (this.urlUpdate) {
  //     var formData: FormData = new FormData();
  //     formData.append('file', this.urlUpdate, this.urlUpdate.name);
  //     this.productService
  //       .updateImageProduct(this.id_product, formData)
  //       .subscribe((res: any) => {
  //         if (res.success == true) {
  //           console.log(1);

  //           check = true;
  //         } else {
  //           check = false;
  //         }
  //       });
  //   }
  //   if (this.urlUpdate1) {
  //     var formData1: FormData = new FormData();
  //     formData1.append('file', this.urlUpdate1, this.urlUpdate1.name);
  //     this.productService
  //       .updateImageProduct1(this.id_product, formData1)
  //       .subscribe((res: any) => {
  //         if (res.success == true) {
  //           console.log(2);
  //           check = true;
  //         } else {
  //           check = false;
  //         }
  //       });
  //   }
  //   if (this.urlUpdate2) {
  //     var formData2: FormData = new FormData();
  //     formData2.append('file', this.urlUpdate2, this.urlUpdate2.name);
  //     this.productService
  //       .updateImageProduct2(this.id_product, formData2)
  //       .subscribe((res: any) => {
  //         if (res.success == true) {
  //           check = true;
  //           console.log(3);
  //         } else {
  //           check = false;
  //         }
  //       });
  //   }
  //   if (this.urlUpdate3) {
  //     var formData3: FormData = new FormData();
  //     formData3.append('file', this.urlUpdate3, this.urlUpdate3.name);
  //     this.productService
  //       .updateImageProduct3(this.id_product, formData3)
  //       .subscribe((res: any) => {
  //         if (res.success == true) {
  //           console.log(4);
  //           check = true;
  //         } else {
  //           check = false;
  //         }
  //       });
  //   }
  //   if (
  //     this.urlUpdate3 ||
  //     this.urlUpdate2 ||
  //     this.urlUpdate1 ||
  //     this.urlUpdate
  //   ) {
  //     this.toastr.success('Upload hình ảnh thành công');
  //   }
  // }

  //Emit data
  edmitModal(data = null) {
    if (data) {
      this.emitModal.emit(data);
      return;
    }

    this.emitModal.emit();
  }

  optionProduct() {
    if (this.id_product) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  //Get image
  fileChangeEvent(event) {
    console.log(event.target.files[0]);

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlImage = event.target.result;
      };
      this.urlUpdate = event.target.files[0];
    }
  }
  fileChangeEvent1(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlImage1 = event.target.result;
      };
      this.urlUpdate1 = event.target.files[0];
    }
  }
  fileChangeEvent2(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlImage2 = event.target.result;
      };
      this.urlUpdate2 = event.target.files[0];
    }
  }
  fileChangeEvent3(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlImage3 = event.target.result;
      };
      this.urlUpdate3 = event.target.files[0];
    }
  }

  //Get option category
  getAllCate() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      if (res.success == true) {
        this.categorys = res.cate;
      }
    });
  }
}
