import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/API/category.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-modal-create-category',
  templateUrl: './modal-create-category.component.html',
  styleUrls: ['./modal-create-category.component.scss'],
})
export class ModalCreateCategoryComponent implements OnInit {
  @Input() id_category: number;

  @Output() emitModal = new EventEmitter();

  category: Category = {};
  optionButton: string;

  formcreate = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    descriptions: new FormControl(''),
  });
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.id_category) {
      this.optionButton = 'Lưu';
      console.log(this.id_category);

      this.getIDCategory();
    } else {
      this.formcreate.patchValue({
        name: '',
        code: '',
        descriptions: '',
      });
      this.optionButton = 'Thêm';
    }
  }

  getIDCategory() {
    this.categoryService
      .getCategoryID(this.id_category)
      .subscribe((res: any) => {
        if (res.success == true) {
          this.category = res.cate[0];
          this.formcreate.patchValue({
            name: this.category.nameCategory,
            code: this.category.codeCategory,
            descriptions: this.category.descriptions,
          });
        }
      });
  }

  edmitModal(data = null) {
    if (data) {
      this.emitModal.emit(data);
      return;
    }

    this.emitModal.emit();
  }
  addCategory() {
    this.category.nameCategory = this.formcreate.controls['name'].value;
    this.category.codeCategory = this.formcreate.controls['code'].value;
    this.category.descriptions = this.formcreate.controls['descriptions'].value;

    this.categoryService.addCategory(this.category).subscribe((res: any) => {
      if (res.success == true) {
        this.toastr.success(res.message);
        this.edmitModal(res);
      }
    });
  }
  updateCategory() {
    this.category.idCategory = this.id_category;
    this.category.nameCategory = this.formcreate.controls['name'].value;
    this.category.codeCategory = this.formcreate.controls['code'].value;
    this.category.descriptions = this.formcreate.controls['descriptions'].value;
    this.categoryService
      .updateCategoryID(this.category.idCategory, this.category)
      .subscribe((res: any) => {
        this.toastr.success(res.message);
        this.edmitModal(res);
      });
  }
  optionCategory() {
    if (this.id_category) {
      this.updateCategory();
      console.log(this.category);
    } else {
      this.addCategory();
    }
  }
}
