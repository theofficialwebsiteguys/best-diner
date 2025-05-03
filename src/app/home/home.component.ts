import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeroComponent } from '../hero/hero.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('homeContainer') homeContainer!: ElementRef;

  images = [
    { src: 'assets/food/food14.jpeg', alt: 'Delicious Dish 1', caption: 'Dish 1' },
    { src: 'assets/food/food15.jpeg', alt: 'Delicious Dish 2', caption: 'Dish 2' },
    { src: 'assets/food/food16.jpeg', alt: 'Delicious Dish 3', caption: 'Dish 3' },
    { src: 'assets/food/food17.jpeg', alt: 'Delicious Dish 4', caption: 'Dish 4' },
    { src: 'assets/food/food18.jpeg', alt: 'Delicious Dish 5', caption: 'Dish 5' },
    { src: 'assets/food/food19.jpeg', alt: 'Delicious Dish 6', caption: 'Dish 6' },
    { src: 'assets/food/food20.jpeg', alt: 'Delicious Dish 7', caption: 'Dish 7' },
    { src: 'assets/food/food21.jpeg', alt: 'Delicious Dish 8', caption: 'Dish 8' },
  ];

  
  carouselOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  };
  

  //constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Add fade-in class to the home container after view initialization
    setTimeout(() => {
      //this.renderer.addClass(this.homeContainer.nativeElement, 'fade-in');
    }, 0);
  }
}
