import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Category } from '../Models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  // : Observable<Category>
  //has check
  getAllCategory() {
    return this.http.get(environment.backend + '/Categories/');
  }
  //has check
  getCategoryID(id: number) {
    return this.http.get(environment.backend + '/Categories/' + id);
  }
  //has check
  addCategory(category: Category) {
    return this.http.post(environment.backend + '/Categories/', category);
  }
  deleteCategoryID(id: number) {
    return this.http.delete(environment.backend + '/Categories/' + id);
  }
  updateCategoryID(id: number, category: Category) {
    return this.http.put(environment.backend + '/Categories/' + id, category);
  }
}
