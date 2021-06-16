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
  getAllProuct() {
    return this.http.get(environment.backend + '/Categories/');
  }
  //has check
  getProuctID(id: number) {
    return this.http.get(environment.backend + '/Categories/' + id);
  }
  //has check
  addProuct(product: Product) {
    return this.http.post(environment.backend + '/Categories/', product);
  }
  deleteProuctID(id: number) {
    return this.http.delete(environment.backend + '/Categories/' + id);
  }
  updateProuctID(id: number, product: Product) {
    return this.http.put(environment.backend + '/Categories/' + id, product);
  }
  updateImageProduct(id: number, product: Product) {}
}
