import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Categories } from '../models/categories'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService : CategoryService) { }

  categories: Categories[] = []

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categoryService.getAllCategories().subscribe(results => {
      this.categories = results.data;
    })
  }

  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getCategoryList();
    })
  } 
}
