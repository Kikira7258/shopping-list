import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { EditShoppingComponent } from './edit-shopping/edit-shopping.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddShoppingComponent,
    EditShoppingComponent,
    AddCategoryComponent,
    CategoryListComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
