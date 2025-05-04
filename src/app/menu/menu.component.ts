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
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FooterMapComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menu: MenuCategory[] =  [
    {
      name: "SALADS",
      items: [
        {
          name: "Chef’s Salad",
          price: 15.99,
          description: "Mixed greens, ham, turkey, American cheese, tomato, cucumber."
        },
        {
          name: "Tuscany Salad",
          price: 15.99,
          description: "Mixed greens, grilled chicken, roasted red peppers, tomato, fresh mozzarella."
        },
        {
          name: "Caesar Salad",
          price: 9.99
        },
        {
          name: "With Chicken $15.99 • With Steak $16.99 • With Shrimp",
          price: 17.99
        },
        {
          name: "Buffalo Salad",
          price: 15.99,
          description: "Romaine lettuce, tomato, red onions, cucumber, buffalo chicken tenders, blue cheese dressing."
        },
        {
          name: "Steak Salad",
          price: 19.99,
          description: "Fresh mozzarella, roasted red peppers, tomato, over greens with grilled steak."
        },
        {
          name: "Salmon Salad",
          price: 20.99,
          description: "Spring mix, red onions, walnuts, avocado, feta cheese, grilled salmon."
        },
        {
          name: "Apple Walnut Salad",
          price: 15.99,
          description: "Spring mix, grilled chicken, walnuts, apples, cranberries, feta, raspberry vinaigrette."
        },
        {
          name: "Florentine Salad",
          price: 12.99,
          description: "Spinach, feta cheese, tomatoes, cucumbers, red onions, Greek dressing."
        },
        {
          name: "Add Chicken $3.00 • Add Steak $4.00 • Add Shrimp $5.00 • Add Salmon",
          price: 6.0
        },
        {
          name: "Greek Salad",
          price: 10.99
        },
        {
          name: "With Chicken $15.99 • With Shrimp",
          price: 17.99,
          description: "Spring mix, lettuce, tomatoes, cucumbers, red onions, olives, feta, Greek dressing."
        }
      ]
    },
    {
      name: "APPETIZERS",
      items: [
        {
          name: "Fried Calamari",
          price: 14.99
        },
        {
          name: "Mozzarella Sticks (6 pcs)",
          price: 11.99
        },
        {
          name: "Chicken Quesadilla",
          price: 8.99
        },
        {
          name: "Cheese Quesadilla",
          price: 6.99
        },
        {
          name: "Chicken Tenders (5 pcs) with French Fries",
          price: 13.99
        },
        {
          name: "Coconut Shrimp",
          price: 14.99
        },
        {
          name: "Sample Platter",
          price: 15.99,
          description: "Mozzarella sticks, wings, and chicken tenders."
        },
        {
          name: "Nachos Dorados",
          price: 10.99,
          description: "Chips topped with cheddar cheese, chili, tomatoes, and jalapeños. Sour cream and salsa on side."
        },
        {
          name: "Cup of Soup $3.50 • Bowl",
          price: 4.5
        },
        {
          name: "French Onion Soup",
          price: 5.99
        }
      ]
    },    
    {
      "name": "BREAKFAST",
      "items": [
        {
          "name": "Served with toast & home fries:",
          "price": 8.99
        },
        {
          "name": "With bacon, sausage, or ham:",
          "price": 10.99
        },
        {
          "name": "With corned beef hash:",
          "price": 11.99,
          "description": "Omelettes"
        },
        {
          "name": "(Served with toast & home fries. Add cheese or substitute bagel/muffin +$1)"
        },
        {
          "name": "Cheese Omelet",
          "price": 9.99
        },
        {
          "name": "Western Omelet",
          "price": 12.99,
          "description": "(Ham, green pepper, onions)"
        },
        {
          "name": "Vegetarian Omelet",
          "price": 12.99,
          "description": "(Mushrooms, tomato, spinach, onion, green pepper)"
        },
        {
          "name": "Meat Lover\u2019s Omelet",
          "price": 13.99,
          "description": "(Bacon, sausage, ham)"
        },
        {
          "name": "California Omelet",
          "price": 13.99,
          "description": "(Tomato, avocado, cheddar cheese, mushrooms)"
        },
        {
          "name": "Garden Power Omelet",
          "price": 13.99,
          "description": "(Tomato, broccoli, spinach, cheddar cheese, egg whites)"
        }
      ]
    },
    {
      name: "BREAKFAST",
      items: [
        {
          name: "Served with toast & home fries:",
          price: 8.99
        },
        {
          name: "With bacon, sausage, or ham:",
          price: 10.99
        },
        {
          name: "With corned beef hash:",
          price: 11.99,
          description: "Omelettes"
        },
        {
          name: "(Served with toast & home fries. Add cheese or substitute bagel/muffin +$1)"
        },
        {
          name: "Cheese Omelet",
          price: 9.99
        },
        {
          name: "Western Omelet",
          price: 12.99,
          description: "(Ham, green pepper, onions)"
        },
        {
          name: "Vegetarian Omelet",
          price: 12.99,
          description: "(Mushrooms, tomato, spinach, onion, green pepper)"
        },
        {
          name: "Meat Lover’s Omelet",
          price: 13.99,
          description: "(Bacon, sausage, ham)"
        },
        {
          name: "California Omelet",
          price: 13.99,
          description: "(Tomato, avocado, cheddar cheese, mushrooms)"
        },
        {
          name: "Garden Power Omelet",
          price: 13.99,
          description: "(Tomato, broccoli, spinach, cheddar cheese, egg whites)"
        }
      ]
    }, 
    {
      name: "EGG SANDWICHES & WRAPS",
      items: [
        {
          name: "Ham & Cheese Omelet Sandwich",
          price: 9.99
        },
        {
          name: "Western Wrap",
          price: 10.99,
          description: "(Ham, onion, pepper, eggs, cheese in a wrap)"
        },
        {
          name: "Breakfast Wrap",
          price: 9.99,
          description: "(Scrambled eggs, cheese, ham or sausage)"
        },
        {
          name: "Egg on a Roll",
          price: 6.99
        },
        {
          name: "(With bacon, ham or sausage +$1)"
        },
        {
          name: "Two Eggs with Bacon & Cheese",
          price: 7.99
        },
        {
          name: "Egg Whites Wrap",
          price: 8.99,
          description: "(Spinach, tomato, avocado)"
        }
      ]
    },      
    {
      name: "PANCAKES",
      items: [
        {
          name: "Buttermilk Pancakes (3 pcs)",
          price: 8.99
        },
        {
          name: "Short Stack Pancakes (2 pcs)",
          price: 7.99
        },
        {
          name: "Pancakes with Bacon or Sausage",
          price: 10.99
        },
        {
          name: "Pancakes with Ham or Corned Beef Hash",
          price: 11.99
        },
        {
          name: "Banana Pancakes",
          price: 9.99
        },
        {
          name: "Strawberry Pancakes",
          price: 9.99
        },
        {
          name: "Blueberry Pancakes",
          price: 9.99
        },
        {
          name: "Oreo Pancakes",
          price: 10.99
        },
        {
          name: "Huevos Rancheros",
          price: 14.99,
          description: "(Two eggs, tortilla, ranchero sauce, black beans, cheese)"
        }
      ]
    },    
    {
      name: "CHALLAH BREAD FRENCH TOAST",
      items: [
        {
          name: "(Served with butter & syrup — add real maple syrup $3)"
        },
        {
          name: "French Toast (3 pcs)",
          price: 8.99
        },
        {
          name: "Nutella French Toast (3 pcs)",
          price: 10.99
        },
        {
          name: "Cinnamon Raisin French Toast (4 pcs)",
          price: 9.99
        },
        {
          name: "With Strawberries or Bananas",
          price: 10.99
        },
        {
          name: "Combo",
          price: 12.99,
          description: "(Two eggs any style & two strips of bacon or two sausages)"
        }
      ]
    },    
    {
      name: "WAFFLES",
      items: [
        {
          name: "(Add real maple syrup $3)"
        },
        {
          name: "Belgian Waffle",
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
      name: "PANCAKE COMBO $12.99",
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
          name: "(All burgers are served with French fries. Upgrade to sweet potato fries or onion rings +$2)"
        },
        {
          name: "Angus Burger Deluxe",
          price: 11.99
        },
        {
          name: "California Burger",
          price: 14.99,
          description: "(Avocado, tomato, lettuce, mayo)"
        },
        {
          name: "Nevada Burger",
          price: 14.99,
          description: "(Bacon, cheddar, fried egg)"
        },
        {
          name: "Hangover Burger",
          price: 14.99,
          description: "(Bacon, sausage, cheddar cheese)"
        },
        {
          name: "Real Hot Pepper Burger",
          price: 14.99,
          description: "(Jalapeño, pepper jack, chipotle mayo)"
        },
        {
          name: "Vegetable Burger Dlx",
          price: 12.99,
          description: "(Lettuce, tomato, red onion)"
        }
      ]
    },    
    {
      name: "WRAPS",
      items: [
        {
          name: "All wraps are served with French fries (Upgrade to sweet potato fries or onion rings for $2.00 extra)"
        },
        {
          name: "Buffalo Wrap",
          price: 13.99,
          description: "Chicken tenders, buffalo sauce, lettuce, blue cheese dressing"
        },
        {
          name: "Mexican Wrap",
          price: 13.99,
          description: "Grilled chicken, lettuce, tomato, cheddar cheese"
        },
        {
          name: "Chicken Caesar Wrap",
          price: 13.99
        },
        {
          name: "Chicken Roma Wrap",
          price: 13.99,
          description: "Grilled chicken, tomato, mayo, mozzarella"
        },
        {
          name: "California Wrap",
          price: 14.99,
          description: "Chicken, avocado, tomato, mayo, mozzarella"
        },
        {
          name: "Steak Wrap",
          price: 15.99
        },
        {
          name: "Salmon Wrap",
          price: 15.99
        },
        {
          name: "Tuna or Chicken Turkey Wrap (Served with lettuce & tomato)",
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
          name: "(Served with French fries or sweet potato fries / onion rings for $2.00 extra)",
          description: "Choice of bread: ciabatta, focaccia, or flatbread."
        },
        {
          name: "Cuban Panini",
          price: 14.99,
          description: "Ham, pork, Swiss cheese, pickles, mustard"
        },
        {
          name: "The Louisiana Panini",
          price: 14.99,
          description: "Cajun chicken, tomato, mozzarella, chipotle mayo"
        },
        {
          name: "Mediterranean Panini",
          price: 14.99,
          description: "Grilled eggplant, tomato, mozzarella, pesto"
        },
        {
          name: "Turkey Club Panini",
          price: 14.99,
          description: "Turkey, bacon, tomato, cheddar cheese"
        },
        {
          name: "Athena Panini",
          price: 14.99,
          description: "Grilled chicken, spinach, tomato, feta"
        },
        {
          name: "BBQ Chicken Panini",
          price: 14.99,
          description: "Grilled chicken, BBQ sauce, cheddar cheese"
        }
      ]
    },    
    {
      name: "HOT SANDWICHES",
      items: [
        {
          name: "(Served with French fries or sweet potato fries / onion rings for $2.00 extra)"
        },
        {
          name: "Chicken Parm Sandwich",
          price: 15.99
        },
        {
          name: "Philly Cheese Steak",
          price: 15.99
        },
        {
          name: "Reuben Sandwich",
          price: 14.99,
          description: "Corned beef or turkey, Swiss cheese, sauerkraut, Russian dressing, on rye"
        },
        {
          name: "Grilled Chicken Sandwich",
          price: 13.99,
          description: "Lettuce, tomato, mozzarella, balsamic"
        },
        {
          name: "Cali Roma Club",
          price: 15.99,
          description: "Grilled chicken, avocado, bacon, lettuce, tomato, chipotle mayo on pita"
        },
        {
          name: "Beef Gyro",
          price: 15.99,
          description: "Lettuce, tomato, red onion, tzatziki on pita"
        }
      ]
    },    
    {
      name: "COLD SANDWICHES",
      items: [
        {
          name: "All served with lettuce, tomato & French fries (Upgrade to onion rings or sweet potato fries $2.00)"
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
          name: "Roast Beef",
          price: 9.99
        },
        {
          name: "Tuna Salad",
          price: 8.99
        },
        {
          name: "Hot Pastrami",
          price: 9.99
        },
        {
          name: "Triple Decker Club",
          price: 12.99,
          description: "(Turkey, bacon, lettuce, tomato, mayo)"
        }
      ]
    },    
    {
      name: "BLT $7.99",
      items: [
        {
          name: "Grill Cheese",
          price: 6.99
        },
        {
          name: "Add Tomato $1.00 • Add Bacon",
          price: 1.99
        },
        {
          name: "Hot Corned Beef",
          price: 9.99
        },
        {
          name: "Hot Open Roast Beef",
          price: 18.99,
          description: "Served with potatoes & vegetables"
        },
        {
          name: "Hot Open Turkey",
          price: 18.95,
          description: "Served with stuffing, cranberry sauce, potatoes & vegetables"
        }
      ]
    },    
    {
      name: "STEAK",
      items: [
        {
          name: "NY Sirloin Steak",
          price: 33.99,
          description: "Served with sautéed mushrooms and onions, mashed potatoes & vegetables"
        },
        {
          name: "Porterhouse Steak",
          price: 36.99,
          description: "24 oz. steak, served with mashed potatoes and vegetables"
        },
        {
          name: "Surf & Turf",
          price: 39.99,
          description: "16 oz. sirloin steak and shrimp scampi, served with rice"
        }
      ]
    },    
    {
      name: "CHICKEN SPECIALS",
      items: [
        {
          name: "Chicken Marsala",
          price: 22.99,
          description: "Chicken breast sautéed with mushrooms in a marsala wine sauce"
        },
        {
          name: "Chicken Francese",
          price: 22.99,
          description: "Egg-battered chicken breast in a lemon butter sauce"
        },
        {
          name: "Chicken Teriyaki",
          price: 22.99,
          description: "Grilled chicken breast in teriyaki glaze with rice"
        },
        {
          name: "Chicken Delight",
          price: 22.99,
          description: "Grilled chicken, mushrooms, garlic, and fresh herbs over sautéed broccoli"
        },
        {
          name: "Lemon Chicken",
          price: 25.99,
          description: "Breaded chicken cutlet in lemon sauce, served over linguine"
        },
        {
          name: "Chicken Madeira",
          price: 25.99,
          description: "Sautéed chicken breast in a madeira wine sauce, with mozzarella cheese, served with mashed potatoes"
        }
      ]
    },    
    {
      name: "FRESH SEAFOOD",
      items: [
        {
          name: "Broiled Salmon",
          price: 26.99,
          description: "With lemon, dill butter sauce, mashed potatoes and vegetables"
        },
        {
          name: "Shrimp Parmigiana",
          price: 27.99,
          description: "Breaded shrimp topped with mozzarella and homemade tomato sauce"
        },
        {
          name: "Teriyaki Salmon",
          price: 28.99,
          description: "Pan-seared salmon glazed with teriyaki sauce, served with rice and vegetables"
        },
        {
          name: "Veracruz-Style Salmon",
          price: 26.99,
          description: "With tomato, olives, green peppers, and avocado"
        },
        {
          name: "Broiled Flounder Filet",
          price: 26.99,
          description: "With lemon butter sauce"
        },
        {
          name: "Stuffed Filet of Sole",
          price: 29.99,
          description: "Filet rolled with crab meat stuffing, served with mashed potatoes"
        },
        {
          name: "Flounder Francaise",
          price: 26.99,
          description: "Egg-battered filet in lemon butter sauce"
        },
        {
          name: "Stuffed Shrimp (3 pcs)",
          price: 29.99,
          description: "With crab meat stuffing"
        },
        {
          name: "Stuffed Shrimp (4 pcs)",
          price: 36.99,
          description: "With crab meat stuffing"
        },
        {
          name: "Garlic Shrimp",
          price: 26.99,
          description: "Jumbo shrimp sautéed in garlic sauce, served with rice"
        },
        {
          name: "Broiled Scallops",
          price: 27.99,
          description: "With lemon butter sauce, served with rice and vegetables"
        },
        {
          name: "Broiled Shrimp Scampi",
          price: 27.99,
          description: "Jumbo shrimp sautéed in garlic butter sauce, served over rice"
        },
        {
          name: "Scallops Marinara or Fra Diavolo",
          price: 34.99,
          description: "Served over linguine"
        },
        {
          name: "Seafood Marinara or Fra Diavolo",
          price: 34.99,
          description: "Shrimp, scallops, mussels over linguine"
        },
        {
          name: "Stuffed Tilapia",
          price: 28.99,
          description: "Tilapia stuffed with crab meat, served with mashed potatoes"
        },
        {
          name: "Fish and Chips",
          price: 15.99
        }
      ]
    },    
    {
      name: "PASTAS",
      items: [
        {
          name: "(Add Chicken",
          price: 6.99,
          description: "with Steak $8.99 • with Shrimp $8.99 • or Salmon)"
        },
        {
          name: "Penne Alla Vodka",
          price: 17.99,
          description: "Penne pasta sautéed in vodka, tomato cream sauce"
        },
        {
          name: "Penne Napoles",
          price: 17.99,
          description: "Penne pasta sautéed with mushrooms, basil in a spicy marinara sauce"
        },
        {
          name: "Fettuccine Alfredo",
          price: 17.99,
          description: "Fettuccine pasta tossed in a parmesan cream sauce"
        },
        {
          name: "Fettuccine Carbonara",
          price: 17.99,
          description: "Fettuccine pasta with bacon, onion in creamy sauce"
        },
        {
          name: "Sicilian Pasta",
          price: 17.99,
          description: "Fusilli pasta sautéed with mushrooms, sun-dried tomatoes, spinach in garlic olive sauce"
        },
        {
          name: "Farfalle Bolognese",
          price: 20.99,
          description: "Farfalle pasta with meat sauce, topped with fresh mozzarella"
        },
        {
          name: "Cajun Pasta",
          price: 17.99,
          description: "Fusilli pasta with onions, mushrooms, and chicken in Cajun cream sauce"
        },
        {
          name: "Chef’s Pasta Special",
          price: 20.99,
          description: "Zucchini, mushrooms, roasted peppers, fresh mozzarella in creamy vodka sauce"
        },
        {
          name: "Meatballs",
          price: 20.99,
          description: "Served with linguine, marinara sauce"
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
          price: 5.99
        },
        {
          name: "Waffle Fries",
          price: 5.99
        },
        {
          name: "Onion Rings",
          price: 5.99
        },
        {
          name: "Side of Vegetables",
          price: 4.99
        },
        {
          name: "Side of Mashed Potatoes",
          price: 3.99
        },
        {
          name: "Side of Rice",
          price: 3.99
        },
        {
          name: "Side of Avocado",
          price: 2.99
        },
        {
          name: "Bacon (3 pcs)",
          price: 5.99
        },
        {
          name: "Sausage (3 pcs)",
          price: 5.99
        },
        {
          name: "Ham (2 pcs)",
          price: 5.99
        },
        {
          name: "Corned Beef Hash",
          price: 5.99
        },
        {
          name: "Home Fries",
          price: 4.99
        },
        {
          name: "Toast",
          price: 1.99
        },
        {
          name: "Bagel",
          price: 2.99
        },
        {
          name: "English Muffin",
          price: 2.99
        },
        {
          name: "Roll",
          price: 1.99
        },
        {
          name: "Muffin (Corn or Blueberry)",
          price: 3.99
        },
        {
          name: "Cup of Oatmeal $3.99 (with fruit $4.99)"
        },
        {
          name: "Bowl of Oatmeal $4.99 (with fruit $5.99)"
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
          description: "Juice (Apple, Orange, Tomato, Cranberry, Pineapple)"
        },
        {
          name: "Small $3.99 • Large",
          price: 6.99
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
        }
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
      name: "KIDS MENU",
      items: [
        {
          name: "(Each served with French fries and a juice box or milk. Soda +$0.99)",
          description: "Penne Mac and Cheese Grilled Cheese & French Fries Cheeseburger & French Fries"
        },
        {
          name: "Linguine Combo with one Mickey Pancake",
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
      name: "TRY VARIOUS DRINKS",
      items: [
        {
          name: "Tropical Smoothie –",
          price: 7.99,
          description: "(Mango, Pineapple, Banana)"
        },
        {
          name: "Classic Smoothie –",
          price: 7.99,
          description: "(Banana & Strawberries)"
        },
        {
          name: "The Diner Smoothie –",
          price: 8.99,
          description: "(Bananas, Blueberries, Strawberries & Pineapple)"
        },
        {
          name: "Fresh Squeezed Orange Juice –",
          price: 6.99
        },
        {
          name: "Cappuccino –",
          price: 4.99
        },
        {
          name: "Espresso –",
          price: 3.99
        }
      ]
    },    
    { name: "NEW MILKSHAKES – $5.99", items: [] },
    {
      name: "TRY OUR NEW FLAVORED COFFEE – $3.99",
      items: [
        {
          name: "Regular Cappuccino –",
          price: 4.99
        },
        {
          name: "Flavored Cappuccino –",
          price: 5.99,
          description: "(French Vanilla or Hazelnut)"
        }
      ]
    },    
    {
      name: "PREMIUM MIMOSA",
      items: [
        {
          name: "($14.99)",
          description: "Made with: ½ Ounce Mandarin Vodka ½ Ounce Fresh Orange Juice The Best Diner 36 Lafayette Ave, Suffern, NY 10901, USA 📞 845-357-5700 Open 7 days a week Sun–Thu: 7 AM – 9 PM Fri & Sat: 7 AM – 10 PM Lunch Specials Served Monday to Friday from 11 AM to 3 PM All served with a cup of soup"
        },
        {
          name: "Tex Mex Quesadilla –",
          price: 12.99,
          description: "3 beef empanadas served with chipotle mayo"
        },
        {
          name: "Tostones con Chicharron –",
          price: 12.99,
          description: "3 tostones topped with shrimp, guacamole, jalapeños, and salsa"
        },
        {
          name: "Ceviche Plate –",
          price: 17.99,
          description: "Shrimp ceviche served on a tostada with house salad"
        },
        {
          name: "Stuffed Avocado –",
          price: 14.99,
          description: "Half avocado stuffed with tuna or chicken salad, over spring mix with sliced egg, tomato, onions, and olives. Served with balsamic dressing."
        },
        {
          name: "Chicken Chipotle Avocado Sandwich –",
          price: 13.99,
          description: "Grilled chicken, chipotle mayo, avocado, lettuce, tomato on a roll. Served with fries."
        },
        {
          name: "California Wrap –",
          price: 13.99,
          description: "Grilled chicken, avocado, tomato, cucumber, roasted peppers, fresh mozzarella, mixed greens. Served with oriental dressing."
        },
        {
          name: "Tex Mex Bowl –",
          price: 12.99,
          description: "Grilled chicken over rice, corn, black beans, pico de gallo, chipotle mayo"
        },
        {
          name: "Chicken Fajita Panini –",
          price: 13.99,
          description: "Grilled chicken, sautéed onions and peppers, cheddar cheese served with fries"
        },
        {
          name: "Grilled Fish Tacos (2) –",
          price: 15.99,
          description: "Served with fries and chipotle mayo"
        },
        {
          name: "Chicken Tenders & Fries –",
          price: 13.99
        },
        {
          name: "California Chicken Caesar Salad –",
          price: 15.99,
          description: "Romaine, grilled chicken, parmesan cheese, roasted peppers, and Caesar dressing"
        },
        {
          name: "Greek Salad with Chicken –",
          price: 15.99,
          description: "Romaine, tomato, cucumber, red onions, kalamata olives, feta cheese"
        },
        {
          name: "Mediterranean Salad –",
          price: 15.99,
          description: "Spring mix, tomato, cucumber, red onions, feta cheese, kalamata olives, grape leaves"
        },
        {
          name: "Meatball Parmigiana –",
          price: 14.99,
          description: "Baked meatballs served over linguine in tomato sauce"
        },
        {
          name: "Pan-Seared Tilapia –",
          price: 17.99,
          description: "Served with rice and lemon butter sauce"
        }
      ]
    }
  ];
}
