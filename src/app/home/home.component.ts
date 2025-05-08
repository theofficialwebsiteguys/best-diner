import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeroComponent } from '../hero/hero.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { FooterMapComponent } from '../footer-map/footer-map.component';



@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule, FooterMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('homeContainer') homeContainer!: ElementRef;

  images = [
    { src: 'assets/food/food2.jpeg', alt: 'Delicious Dish 1', caption: 'Dish 1' },
    { src: 'assets/food/food18.jpeg', alt: 'Delicious Dish 2', caption: 'Dish 2' },
    { src: 'assets/food/food16.jpeg', alt: 'Delicious Dish 3', caption: 'Dish 3' },
    { src: 'assets/food/food3.jpeg', alt: 'Delicious Dish 4', caption: 'Dish 4' },
    { src: 'assets/food/food4.jpeg', alt: 'Delicious Dish 5', caption: 'Dish 5' },
    { src: 'assets/food/food7.jpeg', alt: 'Delicious Dish 6', caption: 'Dish 6' },
    { src: 'assets/food/food20.jpeg', alt: 'Delicious Dish 7', caption: 'Dish 7' },
    { src: 'assets/food/food21.jpeg', alt: 'Delicious Dish 8', caption: 'Dish 8' },
  ];

  
  carouselOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 2 }
    }
  };

  reviews = [
    {
      name: 'Anton Delgado',
      role: 'Traveler, Food Reviewer',
      image: 'https://s0.wp.com/wp-content/themes/premium/varese/assets/images/avatar1.png',
      texts: [
        'A great diner in town. They have a bunch of booths and a bunch of tables. They have a lot of options on their menu and the hot sandwiches that we got were delicious! They have a full bar there with cocktails and beer. We also got a pitcher of sangria which was really good. Their prices were very reasonable. The atmosphere was a little weird because it felt a bit like a diner, but they also had random fancy decorations as well. It felt like an interesting combination, but everything was clean and the waiters were very polite and friendly.',
        'The food is bragworthy. This is where I’ll bring guests from out of town from now on.'
      ]
    },
    {
      name: 'Jane Duffy',
      role: 'Foodie, Food Enthusiast',
      image: 'https://s0.wp.com/wp-content/themes/premium/varese/assets/images/avatar2.png',
      texts: [
        'Visited the diner with a friend and we had a wonderful experience. The food was good and tasted fresh, I ordered a panini and my friend had breakfast. Of course we sampled each other’s plate and we both enjoyed the food. The staff was friendly and attentive to us. Our food came to us in a good amount of time and the portion was more than enough. I had to take the rest of mine to go! If you’re in the area, definitely stop by for a bite!',
        'Truly happy we opted to go here. Double Thumps up for bringing “The Best Diner” back to Suffern.'
      ]
    },
    {
      name: 'Yitzy Ostreicher',
      role: 'Local Guide',
      image: 'assets/reviewer.png',
      texts: [
        'This diner is an absolute treasure and hands-down the best in the area! From the moment you walk in, you’re welcomed with a warm, friendly atmosphere that feels like home. The staff is incredible—always attentive, kind, and genuinely happy to make your dining experience enjoyable.',
        'The food is everything you’d hope for from a classic diner and more. Whether you’re craving breakfast, lunch, or dinner, they have it all, and every dish is cooked to perfection. Their pancakes are fluffy and golden, the omelets are loaded with fresh ingredients, and the burgers are juicy and packed with flavor. And let’s not forget the fries—crispy, golden, and totally addictive!',
      ]
    },
    {
      name: 'Emily Winner',
      role: 'Local Guide',
      image: 'assets/emily.png',
      texts: [
        'This place was a welcome respite of peace after a day at the Route 17 malls! The service was prompt and attentive, and all of our meals were tasty with huge portions. My son ordered a side fresh fruit, and the plate was honestly beautiful. The interior feels cozy and comforting, with soft Christmas music playing. It feels like a spot from my childhood. ',
      ]
    }
  ];
  
  modalOpen = false;
  selectedImage: string = '';
  //constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Add fade-in class to the home container after view initialization
    setTimeout(() => {
      //this.renderer.addClass(this.homeContainer.nativeElement, 'fade-in');
    }, 0);
  }

  
  openImageModal(image: string) {
    this.selectedImage = image;
    this.modalOpen = true;
  }

  closeImageModal() {
    this.modalOpen = false;
  }
}
