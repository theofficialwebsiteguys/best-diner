import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

interface DropdownMenu {
  id: string;
  title: string;
  items: { link: string, label: string }[];
  active: boolean;
}

@Component({
  selector: 'app-nav',
  imports: [RouterModule, HeroComponent, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  searchBarVisible = false;
  mobileMenuActive = false;

  dropdownMenus: DropdownMenu[] = [
    {
      id: 'menu',
      title: 'Menu',
      items: [],
      active: false
    },
    {
      id: 'catering',
      title: 'Catering',
      items: [],
      active: false
    }
  ];

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {
    // Close the menu on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMenu();
    });
  }

  ngOnInit() {

  }

  closeMenu() {
    this.mobileMenuActive = false;
    this.dropdownMenus.forEach(menu => menu.active = false);
  }

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  toggleSearchBar() {
    this.closeMenu();
    this.searchBarVisible = !this.searchBarVisible;
    const searchBarContainer = document.getElementById('searchBarContainer');
    if (searchBarContainer) {
      searchBarContainer.style.display = this.searchBarVisible ? 'block' : 'none';
      if (this.searchBarVisible) {
        setTimeout(() => {
          this.searchInput.nativeElement.focus();
        }, 0);
      }
    }
  }

  onSearch(event: any) {
    const query = event.target.value.toLowerCase();
    // Implement your search logic here
  }

  onSearchEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const query = (event.target as HTMLInputElement).value;
      if (query) {
        this.router.navigate(['/search-results'], { queryParams: { query } });
        this.closeSearchBar();
      }
    }
  }

  viewProductDetail(product: any): void {
    this.searchBarVisible = false;
    const searchBarContainer = document.getElementById('searchBarContainer');
    if (searchBarContainer) {
      searchBarContainer.style.display = 'none';
    }
    this.router.navigate(['/item', product.id], { state: { product } });
  }

  closeSearchBar() {
    this.searchBarVisible = false;
    const searchBarContainer = document.getElementById('searchBarContainer');
    if (searchBarContainer) {
      searchBarContainer.style.display = 'none';
    }
  }

  toggleDropdown(dropdownId: string) {
    const dropdownMenu = this.dropdownMenus.find(menu => menu.id === dropdownId);
    if (dropdownMenu) {
      dropdownMenu.active = !dropdownMenu.active;
    }
  }

  handleDropdownClick(event: Event, dropdownId: string) {
    event.preventDefault();
    event.stopPropagation();
    const dropdownElement = document.getElementById(dropdownId);
    if (dropdownElement) {
      const isShown = dropdownElement.classList.contains('show');
      this.closeAllDropdowns();
      if (!isShown) {
        this.renderer.addClass(dropdownElement, 'show');
      }
    }
  }

  closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
      this.renderer.removeClass(dropdown, 'show');
    });
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    if (!this.isClickInsideElement(event, 'dropdown-toggle') && !this.isClickInsideElement(event, 'dropdown-menu')) {
      this.closeAllDropdowns();
    }
  }

  isClickInsideElement(event: Event, className: string): boolean {
    return (event.target as HTMLElement).closest(`.${className}`) !== null;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    if (offset > 50) {
      this.renderer.addClass(this.navbar.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'scrolled');
    }
  }
}
