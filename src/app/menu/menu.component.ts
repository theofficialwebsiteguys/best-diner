import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterMapComponent } from '../footer-map/footer-map.component';

interface MenuItem {
  name: string;
  price?: number | null;
  description?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FooterMapComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {

  isMobile = window.innerWidth <= 768;


  constructor() {
    this.menu = this.menu.map(cat => ({ ...cat, expanded: true }));
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  
    // Default expanded for desktop
    this.menu.forEach(category => category['expanded'] = true);
  }

  menu: MenuCategory[] =  [
    {
      name: "APPETIZERS",
      items: [
        {
          name: "Chicken Wing (10 pcs)",
          price: 13.99,
          description: "(Choice of sauce - Buffalo, BBQ, Teryaki, Sweet Chili)"
        },
        {
          name: "Mozzarella Sticks (8 pcs)",
          price: 11.99
        },
        {
          name: "Fried Calamari",
          price: 14.99
        },
        {
          name: "Cheese Quesadilla",
          price: 8.99
        },
        {
          name: "Chicken Quesadilla (with Shrimp or steak $16.99)",
          price: 14.99,
          description: "Grilled chicken, onions, peppers"
        },
        {
          name: "Chicken Tenders (3 pcs) with French Fries",
          price: 13.99
        },
        {
          name: "Coconut Shrimp",
          price: 15.99
        },
        {
          name: "Sample Platter",
          price: 21.99,
          description: "Fried Calamari, Fried Clams, Chicken Wings, and Mozzarella Sticks, served with marinara sauce and blue cheese dressing."
        },
        {
          name: "Nachos Dorados",
          price: 15.99,
          description: "Tortilla chips with chili con carne, melted jack cheddar cheese, red onions, tomatoes, jalapeños, sliced avocado, sour cream, chunky salsa."
        },
        {
          name: "Cup of Soup",
          price: 3.5
        },
        {
          name: "Bowl of Soup",
          price: 4.5
        },
        {
          name: "Bowl of Chili",
          price: 8.99
        },
        {
          name: "French Onion Soup",
          price: 6.99
        }
      ]
    },    
    {
      name: "SALADS",
      items: [
        {
          name: "Chef’s Salad",
          price: 15.99,
          description: "Turkey, ham, roast beef, American cheese, tomato, cucumber, sliced egg, on mix greens."
        },
        {
          name: "Tuscany Salad",
          price: 15.99,
          description: "Zucchini, peppers, mushrooms, spinach, cucumber, grilled chicken breast."
        },
        {
          name: "Caesar Salad (With Chicken $15.99 • With Steak $16.99 • With Shrimp $17.99)",
          price: 9.99,
          description: "Romaine lettuce, croutons, parmesan cheese, Caesar dressing."
        },
        {
          name: "Buffalo Salad",
          price: 16.99,
          description: "Fried chicken cutlet tossed in buffalo sauce, mix greens, bacon, tomato, cucumber, crumbled blue cheese, ranch dressing."
        },
        {
          name: "Steak Salad",
          price: 19.99,
          description: "Sliced steak, cucumber, tomato, roasted pepper, fresh mozzarella, sun dried tomato, house dressing."
        },
        {
          name: "Salmon Salad",
          price: 20.99,
          description: "Green mix lettuce, tomatoes, cucumbers, tortilla strips, mandarin oranges, glazed walnuts, avacado, sliced salmon wih citrus dressing."
        },
        {
          name: "Apple Walnut Salad",
          price: 15.99,
          description: "Spring mix lettuce, tomato, apple slices, cucumbers, carrots, and a scoop of chicken salad with raspberry vinaigrette."
        },
        {
          name: "Florentine Salad",
          price: 12.99,
          description: "Spinach, feta cheese, tomatoes, onions, bacon, mushrooms & hard boiled egg. Add CHIX $6.99, STEAK $8.99, SHRIMP or SALMON $8.99"
        },
        {
          name: "Greek Salad (With Chicken $16.99 • With Steak $19.99 • With Shrimp $19.99)",
          price: 10.99,
          description: 'Spring mix lettuce, tomatoes, cucumbers, red onions, kalamata olives, Feta cheese, pita bread, and Greek dressing.'
        },
      ]
    },
    {
      name: "BREAKFAST",
      items: [
        {
          name: "Eggs",
          price: 8.99,
          description: "Two eggs, any style includes home fries and toast (over, scrambled, poached)"
        },
        {
          name: "Eggs with virginia ham or bacon; sausage",
          price: 10.99,
          description: "Two eggs, any style includes home fries and toast (over, scrambled, poached)"
        },
        {
          name: "Eggs with regular or canadian bacon",
          price: 11.99,
          description: "Two eggs, any style includes home fries and toast (over, scrambled, poached)"
        },
        {
          name: "Eggs with Corned Beef hash",
          price: 12.99,
          description: "Two eggs, any style includes home fries and toast (over, scrambled, poached)"
        },
        {
          name: "Plain Omelet",
          price: 8.99
        },
        {
          name: "Cheese Omelet",
          price: 10.99
        },
        {
          name: "Sensation Omelet",
          price: 12.99,
          description: 'tomatoes, spinach & mushroom'
        },
        {
          name: "Western Omelet (with cheese $13.99)",
          price: 12.99,
          description: "(Ham, green pepper, onions)"
        },
        {
          name: "Garden Omelet",
          price: 12.99,
          description: "(tomatoes, pepper, spinach, onion)"
        },
        {
          name: "California Omelet",
          price: 13.99,
          description: "(Tomato, avocado, green onions, jack cheddar cheese, mushrooms)"
        },
        {
          name: "Doctor Omelet",
          price: 12.99,
          description: "(mushrooms, broccoli, spinach, and egg whites)"
        },
        {
          name: "Florentin Omelet",
          price: 13.99,
          description: "(tomatoes, spinach & feta cheese)"
        },
        {
          name: "Ham & Cheese Omelet",
          price: 12.99,
        },
      ]
    }, 
    {
      name: "EGG SANDWICHES & WRAPS",
      items: [
        {
          name: "Fried Egg (2 eggs)",
          price: 5.00,
          description: 'with bacon, ham, pork, sausage, or canadian bacon $9.99'
        },
        {
          name: "Western Sandwhich",
          price: 8.00,
          description: "egg, ham, pepper, onions, add cheese $1.50"
        },
        {
          name: "Breakfast Wrap",
          price: 11.99,
          description: "two eggs, avacado, tomatoes, spinach"
        },
        {
          name: "Burrito Wrap",
          price: 11.99,
          description: "two eggs, red onions, beans, rice, and jack cheddar cheese"
        },
        {
          name: "Trio Wrap",
          price: 11.99,
          description: "two eggs, bacon, sausage, ham, american cheese"
        },
        {
          name: "Steak & Egg",
          price: 19.99,
          description: "Sirloin steak (12oz) two eggs any style served with home fries"
        },
      ]
    },      
    {
      name: "PANCAKES",
      items: [
        {
          name: "Golden Brown Buttermilk Pancakes (3 pcs)",
          price: 8.99,
          description: 'add bacon, ham, prok, sausage, or canadian bacon $3.50'
        },
        {
          name: "Short Stack Pancakes (2 pcs)",
          price: 7.99
        },
        {
          name: "Silver Dollar Pancakes (10 pcs)",
          price: 9.99
        },
        {
          name: "Blueberry or Strawberry Pancakes (3 pcs)",
          price: 11.99
        },
        {
          name: "Banana Pancakes (3 pcs)",
          price: 11.99
        },
        {
          name: "Chocolate Chips Pancakes (3 pcs)",
          price: 9.99
        },
        {
          name: "Banana Nutella Pancakes (3 pcs)",
          price: 12.99
        },
        {
          name: "Walnut Pancakes (3 pcs)",
          price: 10.99
        },
        {
          name: "Coconut Pancakes (3 pcs)",
          price: 10.99
        },
        {
          name: "Oreo Pancakes (3 pcs)",
          price: 10.00
        },
        {
          name: "Huevos Rancheros",
          price: 14.99,
          description: "Three scrambled eggs with red onions, tomatoes, chorizo, fresh cilantro, served with rice, tortilla and salsa"
        }
      ]
    },    
    {
      name: "CHALLAH BREAD FRENCH TOAST",
      items: [
        {
          name: "French Toast (2 pcs)",
          price: 8.99
        },
        {
          name: "Nutella French Toast (2 pcs)",
          price: 10.99
        },
        {
          name: "Coconut Pineapple French Toast (2 pcs)",
          price: 10.99
        },
        {
          name: "Cinnamon Raisin French Toast (4 pcs)",
          price: 9.99
        },
        {
          name: "Creamy Sweet Crepes",
          price: 12.99
        },
      ]
    },    
    {
      name: "WAFFLES",
      items: [
        {
          name: "Belgian Waffle (1pc)",
          price: 8.99
        },
        {
          name: "Chocolate Chip Waffle",
          price: 9.99
        },
        {
          name: "Waffle with Banana or Strawberry or Ice Cream",
          price: 11.99
        },
        {
          name: "Waffle with Banana and Nutella",
          price: 12.99
        }
      ]
    },    
    {
      name: "PANCAKE COMBO $15.99",
      items: []
    },    
    {
      name: "CHICKEN WAFFLE $13.99",
      items: []
    },    
    {
      name: "HAMBURGERS",
      items: [
        {
          name: "All burgers are served with French fries. Upgrade to sweet potato fries or onion rings +$2",
        },
        {
          name: "Angus Burger Deluxe",
          price: 11.99
        },
        {
          name: "California Burger",
          price: 14.99,
          description: "Avocado, bacon, swiss cheese"
        },
        {
          name: "Nirvana Burger",
          price: 14.99,
          description: "grilled tomato, fried egg, bacon, cheddar cheese"
        },
        {
          name: "Hangover Burger",
          price: 14.99,
          description: "mushroom, onion, american cheese"
        },
        {
          name: "Real Hot Pepper Burger",
          price: 14.99,
          description: "avocado, jalapeno, red onion, lettuce, mayo, jack cheddar cheese"
        },
        {
          name: "Chipotle Burger",
          price: 14.99,
          description: "Fried egg, bacon, red onions, cheddar cheese and chipotle mayo"
        },
        {
          name: "Vegetable Burger Dlx",
          price: 12.99,
          description: "(Lettuce, tomato, red onion)"
        },
        {
          name: "Salmon Burger",
          price: 15.99,
          description: "fresh salmon, avocado, red onion"
        }
      ]
    },    
    {
      name: "WRAPS",
      items: [
        {
          name: 'All wraps are served with French fries. Upgrade to sweet potato fries or onion rings for $2.00 extra'
        },
        {
          name: "Buffalo Wrap",
          price: 13.99,
          description: "Crispy Chicken, romaine lettuce, hot suace, blue cheese dressing"
        },
        {
          name: "Mexican Wrap",
          price: 13.99,
          description: "Grilled chicken, lettuce, tomato, cheddar cheese"
        },
        {
          name: "Chicken Roma Wrap",
          price: 13.99,
          description: "Grilled chicken, lettuce, Caesar dressing"
        },
        {
          name: "California Wrap",
          price: 14.99,
          description: "Chicken, avocado, bacon, tomato, mayo, and mozzarella"
        },
        {
          name: "Steak Wrap",
          price: 15.99,
          description: 'Steak, onions, pepper, American cheese'
        },
        {
          name: "Salmon Wrap",
          price: 15.99,
          description: 'Spinach, tomato, avocado, mandarin orange, and raspberry vinaigrette dressing'
        },
        {
          name: "Tuna or Chicken, Turkey Wrap (Served with lettuce & tomato)",
          price: 13.99
        },
        {
          name: "Chicken BLT Wrap",
          price: 13.99
        }
      ]
    },    
    {
      name: "HOT PRESSED PANINIS",
      items: [
        {
          name: 'Served with French fries or sweet potato fries / onion rings for $2.00 extra'
        },
        {
          name: "USA Panini",
          price: 14.99,
          description: "Chicken cutlet, bacon, and american cheese"
        },
        {
          name: "The Louisiana Panini",
          price: 14.99,
          description: "Cajun chicken breast, onion, sliced tomato, cheddar cheese"
        },
        {
          name: "Mediterranean Panini",
          price: 14.99,
          description: "Grilled chicken breast, grilled vegetable, mozzarella cheese"
        },
        {
          name: "Turkey Club Panini",
          price: 14.99,
          description: "Roast Turkey, bacon, coleslaw, swiss cheese"
        },
        {
          name: "Athenian Panini",
          price: 14.99,
          description: "Grilled chicken breast, tzatziki sauce, feta cheese"
        },
        {
          name: "BBQ Chicken Panini",
          price: 14.99,
          description: "Grilled chicken breast, red onion, bacon, BBQ sauce, cheddar cheese"
        }
      ]
    },    
    {
      name: "HOT SANDWICHES",
      items: [
        {
          name: 'Served with French fries or sweet potato fries / onion rings for $2.00 extra'
        },
        {
          name: "Chicken Parm Sandwich",
          price: 16.99
        },
        {
          name: "Classic Tuna melt",
          price: 13.99,
          description: 'Tuna salad, grill tomato, rye bread, american cheese'
        },
        {
          name: "Philly Cheese Steak",
          price: 15.99,
          description: 'grilled steak, onion, green pepper, american cheese'
        },
        {
          name: "Reuben Sandwich",
          price: 14.99,
          description: "Grilled rye bread and sauerkraut on your choice of corn beef, turkey, or patrami melted swiss cheese"
        },
        {
          name: "Chicken Souvlaki",
          price: 13.99,
          description: "Grilled chicken, onion, tomatoes, lettuce with homeade tzatziki sauce on a pita bread"
        },
        {
          name: "California Club",
          price: 14.99,
          description: "Grilled chicen, avocado, bacon, tomatoes, mayo, and mozzarella cheese"
        },
        {
          name: "Beef Gyro",
          price: 15.99,
          description: "Meat, lettuce, tomatoes, onions, tzatziki sauce on pita bread."
        }
      ]
    },    
    {
      name: "COLD SANDWICHES",
      items: [
        {
          name: 'All served with lettuce, tomato & French fries. Upgrade to onion rings or sweet potato fries $2.00'
        },
        {
          name: "Chicken Salad",
          price: 8.99
        },
        {
          name: "Turkey Breast",
          price: 9.99
        },
        {
          name: "Tuna Salad",
          price: 8.99
        },
        {
          name: "Roast Beef",
          price: 9.99
        },
        {
          name: "Hot Pastrami",
          price: 9.99
        },
        {
          name: "Triple Decker Club",
          price: 12.99,
          description: "Turkey breast or chicken salad, bacon, lettuce, tomatoes Tuna salad or Roast Beef. Add $1.50 extra each"
        },
        {
          name: "BLT",
          price: 7.99
        },
        {
          name: "Hot Corned Beef",
          price: 9.99
        },
        {
          name: "Grill Cheese (Add Tomato $1.00 • Add Bacon $1.99)",
          price: 6.99
        },
        {
          name: "Hot Open Turkey",
          price: 18.95,
          description: "Served with potatoes & vegetables"
        },
        {
          name: "Hot Open Roast Beef",
          price: 18.99,
          description: "Served with potatoes & vegetables"
        },
      ]
    },      
    {
      name: "STEAK",
      items: [
        {
          name: "NY Sirloin Steak",
          price: 33.99,
          description: "Steak (16oz) gravy demi-glace sauce served with potatoes and vegatables"
        },
        {
          name: "Porterhouse Steak",
          price: 36.99,
          description: "T-bone Grilled Steak (20oz) creamy peppercorn sauce served with potatoes and vegetables"
        },
        {
          name: "Surf & Turf",
          price: 29.99,
          description: "13 oz. sirloin steak and shrimp scampi, served with rice"
        },
        {
          name: "Pork Chops",
          price: 24.99,
          description: "served with mashed potatoes and vegatbles topped with rosemary sauce"
        },
        {
          name: "Romanian Steak",
          price: 36.99,
          description: "Grilled skirt steak with sauteed onions served with potatoes and vegetables"
        },
        {
          name: "Chopped Sirloin Steak",
          price: 21.99,
          description: "Steak with brown gravy, grilled onions and mushrooms served with potatoes and vegetables"
        }
      ]
    },    
    {
      name: "CHICKEN SPECIALS",
      items: [
        {
          name: "Chicken Special",
          price: 22.99,
          description: "Chicken Parmigiana, Chicken Francaise, Chicken Marsala, served with soup or salad"
        },
        {
          name: "Chicken Teriyaki",
          price: 22.99,
          description: "Sauteed with fresh garden vegetables in teryaki sauce, served with rice"
        },
        {
          name: "Chicken Delight",
          price: 22.99,
          description: "Chicken breast marinated in olive oil with fresh garlic, and fine herbs served over sauteed broccoli and fresh spinach"
        },
        {
          name: "Lemon Chicken",
          price: 25.99,
          description: "Breaded chicken sauteed tomatoes, spinach, garlic butter sauce serverd over linguine"
        },
        {
          name: "Chicken Madeira",
          price: 25.99,
          description: "Chicken breast sauteed mushrooms, asparagus in a madeira sauce & melted mozzarella cheese served with mashed potatoes"
        }
      ]
    },    
    {
      name: "FRESH SEAFOOD",
      items: [
        {
          name: "Broiled Salmon",
          price: 26.99,
          description: "With lemon butter sauce served with potatoes and vegetables"
        },
        {
          name: "Shrimp Parmigiana",
          price: 27.99,
          description: "Served over linguine with mozzarella cheese and rich homeade tomato sauce"
        },
        {
          name: "Teriyaki Salmon",
          price: 28.99,
          description: "Pan seared scallions with garlic teriyaki sauce served with rice and vegetables"
        },
        {
          name: "Veracruz-Style Salmon",
          price: 28.99,
          description: "tomatoes, red onions, garlic butter sauce, served with rice and avocado"
        },
        {
          name: "Broiled Flounder Filet",
          price: 26.99,
          description: "With lemon butter sauce served with potatoes and vegetables"
        },
        {
          name: "Stuffed Filet of Sole",
          price: 28.99,
          description: "roll up with crab meat served with sauteed spinach and mashed potatoes"
        },
        {
          name: "Flounder Francaise",
          price: 26.99,
          description: "With francaise sauce served with choice of rice or pasta"
        },
        {
          name: "Broiled Shrimp (6 pcs)",
          price: 29.99,
          description: "with lemon butter sauce served with potatoes and vegetables"
        },
        {
          name: "Stuffed Shrimp (4 pcs)",
          price: 36.99,
          description: "with crab meat stuffed served with rice and mixed vegetables"
        },
        {
          name: "Garlic Shrimp",
          price: 26.99,
          description: "pepper in garlic butter sauce served with rice and vegetables"
        },
        {
          name: "Broiled Scallops",
          price: 27.99,
          description: "With lemon butter sauce served with rice and vegetables"
        },
        {
          name: "Scallop Shrimp Scampi",
          price: 27.99,
          description: "Shrimp and scallops combination with garlic, lemon butter sauce served over linguine"
        },
        {
          name: "Seafood Marinara or Fly Diablo",
          price: 34.99,
          description: "shrimp, scallops, clams, mussels served over linguine"
        },
        {
          name: "Stuffed Tilapia",
          price: 28.99,
          description: "served with mashed potatoes and vegetables"
        },
        {
          name: "Fish and Chips",
          price: 15.99,
          description: 'served with french fries'
        }
      ]
    },    
    {
      name: "PASTAS",
      items: [
        {
          name: 'Add Chicken • $6.99 with Steak $8.99 • with Shrimp $8.99 • or Salmon'
        },
        {
          name: "Penne Alla Vodka",
          price: 17.99,
          description: "Penne pasta sautéed in a vodka cream sauce"
        },
        {
          name: "Penne Napoles",
          price: 17.99,
          description: "Onions, tomatoes, mushroom, fresh mozzarella, basil in a spicy marinara sauce"
        },
        {
          name: "Fettuccine Alfredo",
          price: 17.99,
          description: "Fettuccine pasta sauteed in a parmesan cream sauce"
        },
        {
          name: "Fettuccine Carbonara",
          price: 17.99,
          description: "Sauteed onions, bacon, peas in a parmesan creamy sauce"
        },
        {
          name: "Sicilian Pasta",
          price: 17.99,
          description: "Farfalle pasta sauteed mushrooms, sun dried tomatoes, spinach in a garlic olive sauce"
        },
        {
          name: "Farfalle Bolognese",
          price: 20.99,
          description: "Farfalle pasta with meat sauce, basil with fresh mozzarella"
        },
        {
          name: "Cajun Pasta",
          price: 17.99,
          description: "Farfalle pasta with onions, tomatoes, mushroom, peas in a cajun cream sauce"
        },
        {
          name: "Chef’s Pasta Special",
          price: 20.99,
          description: "Pasta sauteed with asparagus, zucchini, roasted peppers, fresh mozzarella in a creamy vodka sauce"
        },
        {
          name: "Meatballs",
          price: 20.99,
          description: "Served with Linguine, with tomato sauce"
        }
      ]
    },    
    {
      name: "SIDES",
      items: [
        {
          name: "French Fries",
          price: 4.99
        },
        {
          name: "Sweet Potato Fries",
          price: 6.99
        },
        {
          name: "Waffle Fries",
          price: 5.99
        },
        {
          name: "Rice",
          price: 4.99
        },
        {
          name: "Side Home Fries",
          price: 4.99
        },
        {
          name: "English Muffin",
          price: 3.99
        },
        {
          name: "Avocado Sliced",
          price: 4.99
        },
        {
          name: "Bagel",
          price: 3.99
        },
        {
          name: "Fresh Fruit Salad",
          price: 6.99
        },
        {
          name: "Bagel with cream cheese",
          price: 4.99
        },
        {
          name: "Cereal (with fruit $4.99)",
          price: 3.99
        },
        {
          name: "Onion Rings",
          price: 5.99
        },
        {
          name: "Sausage (3 pcs)",
          price: 5.99
        },
        {
          name: "Beans",
          price: 4.99
        },
        {
          name: "Homeade Soups",
          price: 5.99
        },
        {
          name: "Bacon (6 pcs)",
          price: 5.99
        },
        {
          name: "Ham slice (2 pcs)",
          price: 5.99
        },
        {
          name: "Corned Beef Hash",
          price: 5.99
        },
        {
          name: "Toast",
          price: 1.99
        },
        {
          name: "Roll",
          price: 2.99
        },
        {
          name: "Muffin (Corn or Blueberry)",
          price: 3.99
        },
        {
          name: "Cup of Oatmeal (with fruit $4.99)",
          price: 3.99
        },
        {
          name: "Bowl of Oatmeal (with fruit $5.99)",
          price: 4.99
        }
      ]
    },    
    {
      name: "DRINKS",
      items: [
        {
          name: "Coffee $3.25 (unlimited per visit)"
        },
        {
          name: "Herbal Tea",
          price: 3.99
        },
        {
          name: "Black Tea",
          price: 3.25
        },
        {
          name: "Hot Chocolate",
          price: 3.5
        },
        {
          name: "Chocolate Milk",
          price: 3.99
        },
        {
          name: "Milk",
          price: 3.25,
        },
        {
          name: "Espresso",
          price: 3.99
        },
        {
          name: "Cappuccino",
          price: 4.99
        },
        {
          name: "Milkshake",
          price: 5.99
        },
        {
          name: "Soda or Iced Tea",
          price: 3.35
        },
        {
          name: "Pellegrino",
          price: 3.50
        },
        {
          name: "Juices",
          price: 4.25
        },
        {
          name: "Fresh Orange Juice",
          price: 4.99
        },
      ]
    },    
    {
      name: "DESSERTS",
      items: [
        {
          name: "6 Fried Oreos",
          price: 10.99
        },
        {
          name: "Add ice cream",
          price: 2.99
        }
      ]
    },    
    {
      name: "KIDS MENU (Including Milk or Soda)",
      items: [
        {
          name: "Mac and Cheese",
          price: 9.99
        },
        {
          name: "Penne Butter",
          price: 9.99
        },
        {
          name: "Grill Cheese & French Fries",
          price: 9.99
        },
        {
          name: "Cheese Burger & French Fries",
          price: 9.99
        },
        {
          name: "Linguine Tomato Sauce",
          price: 9.99
        },
        {
          name: "Micky pancake with egg",
          price: 8.99
        }
      ]
    },    
    { name: "SPANISH SKILLET – $16.99", items: [] },
    { name: "BREAKFAST QUESADILLA – $15.99", items: [] },
    { name: "HEALTHY AVOCADO TOAST – $12.99", items: [] },
    { name: "AVOCADO BENEDICT – $14.99", items: [] },
    { name: "STEAK BENEDICT – $17.99", items: [] },
    { name: "EGGS BENEDICT – $14.99", items: [] },
    { name: "BUFFALO SKILLET", items: [] },        
    {
      name: "Lunch Specials (Served with a cup of soup) Monday - Friday 11am to 3pm",
      items: [
        {
          name: "5 Tex mex tostones with guacamole",
          price: 12.99,
        },
        {
          name: "3 Tostones and 3 shrimp al ajillo",
          price: 15.99,
        },
        {
          name: "3 Beef empanadas served with chipotle mayo",
          price: 12.99,
        },
        {
          name: "Beef Gyro Platter",
          price: 17.99,
          description: 'Gyro meat on pita bread served with greek salad and french fries, tzatziki sauce'
        },
        {
          name: "Stuffed Avocado",
          price: 14.99,
          description: 'Half avocado, stuffed with tuna or chicken salad w/sliced egg, tomato, onions, and olives w/balsamic dressing'
        },
        {
          name: "Spanish Steak",
          price: 20.99,
          description: 'Sirloin steak 12 oz, seasoned with caramelized onions served with spanish rice and black beans.'
        },
        {
          name: "Chicken Chipotle Deluxe Sandwich",
          price: 13.99,
          description: 'Crispy breaded chicken with chipotle mayo, lettuce, tomato on a kaiser roll served with french fries'
        },
        {
          name: "Oriental Sesame Salad",
          price: 16.99,
          description: 'California spring mixed with tomatoes, cucumbers, roasted peppers, fresh mozzarella & crispy noodles, grilled chicken. With sesame oriental dressing '
        },
        {
          name: "Giant Burrito Wrap",
          price: 16.99,
          description: 'Grilled chicken onion, peppers, tomatoes, black beans, and cheddar cheese served with rice, guacamole, and salsa'
        },
        {
          name: "Chicken Pesto Panini",
          price: 15.99,
          description: 'Grilled chicken, fresh mozzarella cheese, roasted pepper, and pesto sauce served with french fries'
        },
        {
          name: "Fish And Chips",
          price: 15.99,
          description: 'Served with french fries and tartar sauce'
        },
        {
          name: "Calamari Salad",
          price: 17.99,
          description: 'Garden spring mix tomatoes, cucumbers, onions, olives & crispy calamri served with balsamic & olive oil dressing'
        },
        {
          name: "Meatball Parmigiana",
          price: 16.99,
          description: 'Baked meatballs, melted mozzarella cheese & tomato sauce served over linguine'
        },
        {
          name: "Tilapia Francaise",
          price: 17.99,
          description: 'Pan seared tilapia with lemon butter sauce served with rice'
        },
      ]
    }
  ];
  
}
