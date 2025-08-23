import { Component } from '@angular/core';
import { CategoryBannersComponent } from '../category-banners/category-banners.component';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';

export interface Category {
  title: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CategoryBannersComponent, HeroBannerComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  categories: Category[] = [
    { title: 'Women', imageUrl: 'assets/images/women.jpeg', link: '/category/women' },
    { title: 'Men',   imageUrl: 'assets/images/men.jpeg',   link: '/category/men'   },
    { title: 'Kids',  imageUrl: 'assets/images/kids.jpeg',  link: '/category/kids'  },
    { title: 'Pets',  imageUrl: 'assets/images/pets.jpeg',  link: '/category/pets'  },
  ];
}

