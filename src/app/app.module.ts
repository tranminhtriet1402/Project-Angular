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
import { ModalCreateCategoryComponent } from './Component/store-management/category-management/modal-create-category/modal-create-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmContentComponent } from './Shared/confirm-content/confirm-content.component';
import { ModalCreateProductComponent } from './Component/store-management/product-management/modal-create-product/modal-create-product.component';
import { DetailProductComponent } from './Component/product-component/detail-product/detail-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MyDefaultTooltipOptions } from './Directive/tooltip';

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
    ModalCreateCategoryComponent,
    ConfirmContentComponent,
    ModalCreateProductComponent,
    DetailProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayOutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-left', timeOut: 3000 }),
    NgxPaginationModule,
    TooltipModule.forRoot(MyDefaultTooltipOptions),
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
