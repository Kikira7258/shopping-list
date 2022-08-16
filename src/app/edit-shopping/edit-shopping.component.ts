import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'
import { ShoppingListService } from '../shopping-list.service'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-shopping',
  templateUrl: './edit-shopping.component.html',
  styleUrls: ['./edit-shopping.component.css']
})
export class EditShoppingComponent implements OnInit {
  id?: string;
  data: any = {
    item_name: '',
    category: '',
    price: null,
    quantity: null
  };
  categories: any[] = [];

  constructor(private shoppingListService: ShoppingListService, private categoryService: CategoryService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.shoppingListService.getItemById(this.id).subscribe((res) => {
        this.data = res.data;
        this.data.category = res.data.category._id;
      })
    }

    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
    })
  }

  handleSubmit() {
    this.shoppingListService.updateItem(this.id!, this.data).subscribe(() => {
      this.location.back();
    })
  }

}
