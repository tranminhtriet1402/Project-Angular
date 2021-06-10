import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayOutModule } from './Layout/layout.module';
import { ProductShoeManComponent } from './Component/product-component/product-shoe-man/product-shoe-man.component';
import { ProductShoeWomenComponent } from './Component/product-component/product-shoe-women/product-shoe-women.component';
import { ProductComponentComponent } from './Component/product-component/product-component.component';
import { ProductShowSportComponent } from './Component/product-component/product-show-sport/product-show-sport.component';
import { CategoryService } from './API/category.service';
import { StoreManagementComponent } from './Component/store-management/store-management.component';
import { DashboardManagementComponent } from './Component/store-management/dashboard-management/dashboard-management.component';
import { CategoryManagementComponent } from './Component/store-management/category-management/category-management.component';
import { ProductManagementComponent } from './Component/store-management/product-management/product-management.component';
import { ModalComponentComponent } from './Shared/modal-component/modal-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponentComponent } from './Shared/pagination-component/pagination-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductShoeManComponent,
    ProductShoeWomenComponent,
    ProductShowSportComponent,
    StoreManagementComponent,
    DashboardManagementComponent,
    CategoryManagementComponent,
    ProductManagementComponent,
    ModalComponentComponent,
    PaginationComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayOutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
