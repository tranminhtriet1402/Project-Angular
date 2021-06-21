import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/API/category.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss'],
})
export class CategoryManagementComponent implements OnInit {
  isOpen: boolean;
  array: Category[];
  category: Category[];
  id_category: number;
  title: string;

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
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isOpenConfrim = false;
    this.isOpen = false;
    this.getAllCategory();
  }

  //Add or create
  open(id) {
    this.isOpen = true;
    if (id) {
      this.title = 'Chỉnh sửa thông tin ';
      this.id_category = id;
    } else {
      this.isOpen = true;
      this.id_category = 0;
      this.title = 'Thêm mới';
    }
  }
  close(data: any) {
    if (!data) {
      this.isOpen = false;
      this.isOpenConfrim = false;
      this.id_category = 0;
    }
  }
  edmitModal(res) {
    if (res) {
      if (res.success == true) {
        this.getAllCategory();
        this.isOpen = false;
      }
    } else {
      this.isOpen = false;
    }
  }
  //Del
  del(id) {
    this.id_category = id;
    this.title = 'Xóa phân loại';
    this.isOpenConfrim = true;
  }
  confirmDel(res) {
    if (res == true) {
      this.categoryService
        .deleteCategoryID(this.id_category)
        .subscribe((res: any) => {
          if (res.success == true) {
            this.id_category = 0;
            this.toastr.success(res.message);
            this.isOpenConfrim = false;
            this.getAllCategory();
          } else {
            this.toastr.error(res.message);
            this.isOpenConfrim = false;
          }
        });
    } else {
      this.isOpenConfrim = false;
    }
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      if (res.success == true) {
        this.category = res.cate as Category[];
        console.log(this.category);
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
