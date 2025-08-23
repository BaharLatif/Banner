import { Component, Input } from '@angular/core';
import { Category, CategoryCardComponent } from './category-card/category-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-banners',
  standalone: true,
  imports: [NgFor, CategoryCardComponent],
  templateUrl: './category-banners.component.html',
  styleUrls: ['./category-banners.component.css']
})
export class CategoryBannersComponent {
  @Input({ required: true }) items: Category[] = [];
}


