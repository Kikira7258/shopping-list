import { Component, OnInit } from '@angular/core';
import { Items } from '../models/items';
import { ShoppingListService } from '../shopping-list.service';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.component.html',
  styleUrls: ['./add-shopping.component.css']
})
export class AddShoppingComponent implements OnInit {

  data: any = {
    item_name: '',
    category: '',
    price: null,
    quantity: null
  }
  categories: any[] = [];

  constructor(private shoppingListService:ShoppingListService, private categoryService: CategoryService, private location: Location) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
    })
  }

  onSubmit() {
    this.shoppingListService.createItem(this.data).subscribe(() => {
      window.alert("Successfully Added");
      this.location.back();
    });
    
  }

}
