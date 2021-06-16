import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.isOpen = false;
    this.getAllCategory();
  }
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

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      if (res.success == true) {
        this.category = res.cate as Category[];
        console.log(this.category);
      }
    });
  }
}
