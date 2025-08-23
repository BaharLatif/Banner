import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


export interface Category {
  title: string;
  imageUrl: string;
  link?: string;
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input({required: true}) category!: Category;
  trackClick(name:string){ console.log('Clicked', name); }

}
