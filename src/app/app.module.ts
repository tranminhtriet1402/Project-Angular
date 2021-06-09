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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductShoeManComponent,
    ProductShoeWomenComponent,
    ProductShowSportComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayOutModule, HttpClientModule],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
