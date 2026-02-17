import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
    @Input() product!: Product;
    currentImage: string = '';
    isModalOpen = false;
    ngOnInit() {
      this.currentImage = this.product.image;
    }
    changeImage(imageUrl: string) {
      this.currentImage = imageUrl;
    }
    openModal() {
      this.isModalOpen = true;
    }

    closeModal() {
      this.isModalOpen = false;
    }

    prevImage() {
      const currentIndex = this.product.images.indexOf(this.currentImage);  
      const prevIndex = (currentIndex - 1 + this.product.images.length) % this.product.images.length; 
      this.currentImage = this.product.images[prevIndex];
    }

    nextImage() {
      const currentIndex = this.product.images.indexOf(this.currentImage);
      const nextIndex = (currentIndex + 1) % this.product.images.length;
      this.currentImage = this.product.images[nextIndex];
    }

    getStarFill(): string {
    const percentage = (this.product.rating / 5) * 100;
    return percentage + '%';
    }
    
    shareOnWhatsapp(){
      const url = `https://wa.me/?text=${encodeURIComponent('Check out this: ' + this.product.link)}`;
      window.open(url, '_blank');
    }
    shareOnTelegram(){
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
