import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  id?: string;
  data: any = {
    name: ''
  }

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.categoryService.getCategoryById(this.id).subscribe((res) => {
        this.data = res.data;
      })
    }
  }

  handleSubmit() {
    this.categoryService.updateCategory(this.id!, this.data).subscribe(() => {
      this.location.back();
    })
  }

}
