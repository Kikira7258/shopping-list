import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Items } from './../models/items'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Items[] = []
  
  total: number = 0;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.getList();
  }

  
  getList(){
    this.shoppingListService.getAllItems().subscribe(results => {
      this.items = results.data
      this.total = this.getTotal()
    })
  }

  deleteItem(id: string) {
    this.shoppingListService.deleteItem(id).subscribe(() => {
      this.getList();
    })
  } 

  
  // total = this.items.reduce((accumulator, current) => {
  //   return accumulator + current.price;
  // }, 0);


  getTotal(){
    return this.items.reduce((accumulator, current) => {
      return accumulator + current.price * current.quantity;
    }, 0);
  }

}
