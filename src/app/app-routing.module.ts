import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './Component/product-component/detail-product/detail-product.component';
import { ProductComponentComponent } from './Component/product-component/product-component.component';
import { ProductShoeManComponent } from './Component/product-component/product-shoe-man/product-shoe-man.component';
import { ProductShoeWomenComponent } from './Component/product-component/product-shoe-women/product-shoe-women.component';
import { ProductShowSportComponent } from './Component/product-component/product-show-sport/product-show-sport.component';
import { CategoryManagementComponent } from './Component/store-management/category-management/category-management.component';
import { DashboardManagementComponent } from './Component/store-management/dashboard-management/dashboard-management.component';
import { ProductManagementComponent } from './Component/store-management/product-management/product-management.component';
import { StoreManagementComponent } from './Component/store-management/store-management.component';

import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ProductComponentComponent,
      },
      {
        path: 'Home',
        component: ProductComponentComponent,
      },
      {
        path: 'shoe-man',
        component: ProductShoeManComponent,
      },
      {
        path: 'shoe-woman',
        component: ProductShoeWomenComponent,
      },
      {
        path: 'shoe-sport',
        component: ProductShowSportComponent,
      },
      {
        path: 'detail/:id',
        component: DetailProductComponent,
      },
      {
        path: 'store-management',
        component: StoreManagementComponent,
        children: [
          {
            path: '',
            component: DashboardManagementComponent,
          },

          {
            path: 'product-management',
            component: ProductManagementComponent,
          },
          {
            path: 'category-management',
            component: CategoryManagementComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
