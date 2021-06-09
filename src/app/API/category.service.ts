import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategory() {
    return this.http.get(environment.backend + '/Categories/');
  }
  getCategoryID(id: number) {
    return this.http.get(environment.backend + '/Categories/' + id);
  }
  deleteCategoryID(id: number) {
    return this.http.delete(environment.backend + '/Categories/' + id);
  }
  updateCategoryID(id: number) {
    return this.http.delete(environment.backend + '/Categories/' + id);
  }
  addCategory(category: Category) {
    return this.http.post(environment.backend + '/Categories/', category);
  }
}
