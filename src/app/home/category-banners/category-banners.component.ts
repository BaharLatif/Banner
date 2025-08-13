import { Component } from '@angular/core';
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
  categories : Category[] = [
    {title: 'Women', imageUrl: 'assets/images/women.jpeg'},
    {title: 'Men', imageUrl: 'assets/images/men.jpeg'},
    {title: 'Kids', imageUrl: 'assets/images/kids.jpeg'},
    {title: 'Pets', imageUrl: 'assets/images/pets.jpeg'}
  ];

}
