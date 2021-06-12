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

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.isOpen = false;
    this.getAllCategory();
  }
  addCategory() {
    this.isOpen = true;
  }
  close(data: any) {
    if (!data) {
      this.isOpen = false;
    }
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res as Category[];
      // this.category = this.array.slice(0, 2);

      // console.log(this.category.slice(0, 2));
    });
  }
}
