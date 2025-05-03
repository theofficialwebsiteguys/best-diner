import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: { src: string, alt: string }[] = [
    { src: 'assets/food/food1.jpeg', alt: 'Delicious Dish 1' },
    { src: 'assets/food/food2.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food3.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food4.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food5.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food7.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food8.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food9.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food10.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food11.jpeg', alt: 'Delicious Dish 1' },
    { src: 'assets/food/food12.jpeg', alt: 'Delicious Dish 2' },
    { src: 'assets/food/food13.jpeg', alt: 'Delicious Dish 2' },

    // Add more images as needed
  ];
}
