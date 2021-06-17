import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/API/category.service';
import { ProductService } from 'src/app/API/product.service';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-modal-create-product',
  templateUrl: './modal-create-product.component.html',
  styleUrls: ['./modal-create-product.component.scss'],
})
export class ModalCreateProductComponent implements OnInit {
  @Input() id_product: number;
  @Input() option: boolean = true;
  @Input() title: string;
  @Output() emitModal = new EventEmitter();
  product: Product = {};
  categorys: Category[] = [];
  optionButton: string;

  urlImage: string = '';
  urlUpdate: any;
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

  getIDProduct() {
    this.productService.getProuctID(this.id_product).subscribe((res: any) => {
      if (res.success == true) {
        console.log(res);

        this.product = res.product[0];
        this.formcreate.patchValue({
          name: this.product.nameProduct,
          code: this.product.codeProduct,
          price: this.product.price,
          type_category: this.product.idCategory ? this.product.idCategory : '',
          descriptions: this.product.descriptions,
        });
      }
    });
  }
  addProduct() {
    this.product.idCategory = this.formcreate.controls['type_category'].value;
    this.product.nameProduct = this.formcreate.controls['name'].value;
    this.product.codeProduct = this.formcreate.controls['code'].value;
    this.product.descriptions = this.formcreate.controls['descriptions'].value;
    this.product.price = this.formcreate.controls['price'].value;

    this.product.descriptions = this.formcreate.controls['descriptions'].value;
    if (this.urlUpdate) {
      this.productService.addProuct(this.product).subscribe((res: any) => {
        if (res) {
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
        } else {
        }
      });
    } else {
      this.toastr.warning('Bạn chưa thêm hình ảnh cho sản phẩm');
    }
  }
  updateProduct() {
    this.product.idProduct = this.id_product;
    this.product.idCategory = this.formcreate.controls['type_category'].value;
    this.product.nameProduct = this.formcreate.controls['name'].value;
    this.product.codeProduct = this.formcreate.controls['code'].value;
    this.product.descriptions = this.formcreate.controls['descriptions'].value;
    this.product.price = this.formcreate.controls['price'].value;

    // this.productService
    //   .updateProuctID(this.product.idProduct, this.product)
    //   .subscribe((res: any) => {
    //     if (res.message == true) {

    //     }
    //     this.toastr.success(res.message);
    //     this.edmitModal(res);
    //   });
    // if (this.urlUpdate) {
    //   const formData: FormData = new FormData();
    //   formData.append('file', this.urlUpdate, this.urlUpdate.name);
    //   this.productService
    //     .updateImageProduct(this.id_product, formData)
    //     .subscribe((res1: any) => {
    //       if (res1.success == true) {
    //         this.toastr.success(res1.message);
    //         this.edmitModal(res1);
    //       } else {
    //         this.toastr.error(res1.message);
    //       }
    //     });
    // }
  }

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

  fileChangeEvent(event) {
    console.log(event.target.files);
    this.urlUpdate = event.item;

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlImage = event.target.result;
      };
      this.urlUpdate = event.target.files[0];
    }
  }

  up() {}
  //Get option category
  getAllCate() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      if (res.success == true) {
        this.categorys = res.cate;
      }
    });
  }
}
