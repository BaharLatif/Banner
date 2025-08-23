import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-page',
  imports: [AsyncPipe],
  template: `
    <section class="container section">
      <h1>Category: {{ slug$ | async }}</h1>
    </section>
  `
})
export class CategoryPageComponent {
  private route = inject(ActivatedRoute);
  slug$ = this.route.paramMap.pipe(map(p => p.get('slug') ?? ''));
}
