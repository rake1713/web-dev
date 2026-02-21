import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './components/product-list/product-list.component';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { categories,products } from './data/product';


@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Category[] = categories;
  allProducts: Product[] = products;
  selectedCategoryId: number | null = null;
  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  onProductDeleted(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  getFilteredProducts(): Product[] {
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
}
