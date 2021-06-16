import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/API/category.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
})
export class ProductComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
