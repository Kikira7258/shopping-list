import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  data: any = {
    name: ''
  }

  constructor(private categoryService: CategoryService, private location: Location) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.categoryService.createCategory(this.data).subscribe(() => {
        this.location.back();
    })
  }
}
