import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, HeroComponent, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isScrolled = false;
  mobileMenuActive = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  
  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
  
  closeMenu() {
    this.mobileMenuActive = false;
  }

    scrollToSpecials() {
    const specialsSection = document.getElementById('specials');
    if (specialsSection) {
      specialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  
}
