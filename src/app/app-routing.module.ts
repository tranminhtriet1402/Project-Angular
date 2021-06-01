import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentComponent } from './Component/product-component/product-component.component';
import { ProductShoeManComponent } from './Component/product-component/product-shoe-man/product-shoe-man.component';
import { ProductShoeWomenComponent } from './Component/product-component/product-shoe-women/product-shoe-women.component';
import { ProductShowSportComponent } from './Component/product-component/product-show-sport/product-show-sport.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
