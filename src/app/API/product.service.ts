import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  //has check
  getAllProduct() {
    return this.http.get(environment.backend + '/Products/');
  }
  getAllProductOnCate(id: number) {
    return this.http.get(environment.backend + '/getProductOnCate/' + id);
  }
  //has check
  getProductID(id: number) {
    return this.http.get(environment.backend + '/Products/' + id);
  }
  //has check
  addProduct(product: Product) {
    return this.http.post(environment.backend + '/Products/', product);
  }
  deleteProductID(id: number) {
    return this.http.delete(environment.backend + '/Products/' + id);
  }
  updateProductID(id: number, product: Product) {
    return this.http.put(environment.backend + '/Products/' + id, product);
  }
  updateImageProduct(id: number, formData: FormData) {
    return this.http.put(
      environment.backend + `/Products/${id}/Upload`,
      formData
    );
  }
  updateImageProduct1(id: number, formData: FormData) {
    return this.http.put(
      environment.backend + `/Products/${id}/Upload1`,
      formData
    );
  }
  updateImageProduct2(id: number, formData: FormData) {
    return this.http.put(
      environment.backend + `/Products/${id}/Upload2`,
      formData
    );
  }
  updateImageProduct3(id: number, formData: FormData) {
    return this.http.put(
      environment.backend + `/Products/${id}/Upload3`,
      formData
    );
  }
}
