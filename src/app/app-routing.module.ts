import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditShoppingComponent } from './edit-shopping/edit-shopping.component';

const routes: Routes = [
  {path: '', redirectTo: 'shopping-list', pathMatch : 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'add-item', component: AddShoppingComponent},
  {path: 'edit-item/:id', component: EditShoppingComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

