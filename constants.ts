import { MenuData } from './types';

export const MENU_DATA: MenuData = {
  day: [
    {
      title: "Breakfast & Brunch",
      items: [
        { name: "MOJA Desi Breakfast", price: "9.5", description: "Paratha (2), masala omelette, aloo niramish, butter chicken" },
        { name: "MOJA Desi Vegetarian Breakfast", price: "8.5", description: "Paratha (2), masala omelette, masala beans, masala chickpeas" },
        { name: "MOJA Best of Both Breakfast", price: "9.9", description: "Sausage, turkey bacon, masala beans, masala omelette, hash brown, toast" },
        { name: "MOJA English Breakfast", price: "9.5", description: "Turkey bacon, sausage (2), egg (fried), tomato, mushrooms, baked beans, hash brown, toast" },
        { name: "MOJA Vegetarian Breakfast", price: "7.9", description: "Fried egg, vegetarian sausage (2), beans, mushroom, tomatoes, and toast" },
        { name: "MOJA Desi French Toast", price: "7.5", description: "Bread dipped in spicy egg, onion, coriander green chillies and shallow fried" },
        { name: "MOJA Desi Breakfast Wrap", price: "7.9", description: "Masala omelette, aloo niramish, butter chicken" },
        { name: "MOJA Best of Both Breakfast Wrap", price: "8.5", description: "Sausage, turkey bacon, masala beans, masala omelette" },
        { name: "Masala Beans on Toast", price: "4.9", description: "Add sausage or fried egg for £1" },
        { name: "MOJA Spicy Omelette Wrap", price: "5.9", description: "Spicy omelette with onions and green chillies" },
        { name: "Sausage and Turkey Bacon Sandwich/Wrap", price: "6.5" },
        { name: "Mini MOJA Breakfast", price: "5.9", description: "Sausage, baked beans, hash brown (2), scrambled egg" },
        { name: "Plain Paratha (2) with Shemai", price: "5.9", description: "Sweet Vermicelli" },
        { name: "Avocado Egg Salad on Sourdough Toast", price: "6.5" },
        { name: "Yoghurt Bowl", price: "5.9", description: "Granola, banana, mixed berries, honey, pumpkin seeds" },
        { name: "Brioche Sweet French Toast", price: "6.5", description: "Turkey bacon and maple syrup or Nutella, strawberries and banana" },
      ]
    },
    {
      title: "Lunch & Specials",
      items: [
        { name: "MOJA Butter Chicken Bowl", price: "9.9", description: "Served with fragrant pilau rice/chips/masala chips" },
        { name: "MOJA Butter Chicken Bowl (Small)", price: "7.9", description: "Served with fragrant pilau rice/chips/masala chips" },
        { name: "MOJA Sweet Chilli Chicken Bowl", price: "9.9", description: "Served with fragrant pilau rice/chips/masala chips" },
        { name: "MOJA Sweet Chilli Chicken Bowl (Small)", price: "7.9", description: "Served with fragrant pilau rice/chips/masala chips" },
        { name: "Butter Chickpea and Paneer Bowl", price: "8.5", description: "Served with fragrant pilau rice/chips/masala chips" },
        { name: "Butter Chickpea and Paneer Bowl (Small)", price: "6.9", description: "Served with fragrant pilau rice/chips/masala chips" },
        { name: "Pasta Bowl", price: "6.9", description: "Creamy mushroom and pesto with chicken" },
        { name: "Vegetable Samosa Chaat", price: "6.5", description: "Crispy pastry samosas on a bed of chickpeas, mint, tamarind & yogurt" },
        { name: "Chicken/Mutton Samosa Chaat", price: "7.5", description: "Crispy pastry samosas on a bed of chickpeas, mint, tamarind & yogurt" },
        { name: "MOJA Chicken Salad", price: "7.9", description: "Grilled Chicken, lettuce, red onions, cucumber, tomato, and sweetcorn" },
        { name: "Shredded Mutton Wrap", price: "8.5", description: "Tortilla or Paratha. Succulent shredded mutton, potato with salad and sauce" },
        { name: "Shredded Chicken Wrap", price: "7.9", description: "Tortilla or Paratha. Spicy shredded chicken, potato with salad and sauce" },
        { name: "Mutton and Chicken Mix Wrap", price: "8.9", description: "Tortilla or Paratha. Shredded mutton and chicken, potato with salad and sauce" },
        { name: "Chicken Kebab Meatball Wrap", price: "7.9", description: "Tortilla or Paratha. Minced chicken thigh meatballs with salad and sauce" },
        { name: "Butter Chicken Paratha Pizza", price: "9.9", description: "Flaky paratha base, creamy butter chicken, melty cheese" },
        { name: "Shredded Mutton Paratha Pizza", price: "10.5", description: "Flaky paratha base, succulent shredded mutton, melty cheese" },
        { name: "Masala Chips", price: "4.0", description: "Add cheese for £1" },
        { name: "Chips", price: "3.0" },
      ]
    },
    {
      title: "Bites & Extras",
      headers: ["1x", "3x"],
      items: [
        { name: "Vegetable Samosa", priceQty1: "1.2", priceQty3: "3.5" },
        { name: "Paneer Samosa", priceQty1: "1.5", priceQty3: "4.2" },
        { name: "Chicken Samosa", priceQty1: "1.5", priceQty3: "4.2" },
        { name: "Mutton Samosa", priceQty1: "1.6", priceQty3: "4.5" },
        { name: "Chicken Kebab", priceQty1: "1.5", priceQty3: "4.2" },
        { name: "Vegetable Pakora", priceQty1: "0.5", priceQty3: "1.2" },
        { name: "Sweet Coconut Samosa", priceQty1: "1.2", priceQty3: "3.5" },
        { name: "Vegetable Spring Roll", priceQty1: "1.2", priceQty3: "3.5" },
        { name: "Aloo Paratha", priceQty1: "2.0", priceQty3: "5.0" },
      ]
    },
    {
      title: "Hot Drinks",
      headers: ["R", "L", "POT"],
      items: [
        { name: "Espresso", priceR: "2.9" },
        { name: "Americano", priceR: "3.2", priceL: "3.6" },
        { name: "Latte", priceR: "3.6", priceL: "3.9" },
        { name: "Cappuccino", priceR: "3.6", priceL: "3.9" },
        { name: "Flat White", priceR: "3.7" },
        { name: "Mocha", priceR: "4.0", priceL: "4.4" },
        { name: "White Mocha", priceR: "4.0", priceL: "4.4" },
        { name: "Spanish Latte", priceR: "4.3", priceL: "4.6" },
        { name: "Tea", priceR: "2.5", priceL: "2.8", pricePot: "5.9", description: "Earl Grey, Peppermint, Nettle, Mint" },
        { name: "Spiced Chai Latte", priceR: "4.8", priceL: "5.2", description: "Make it dirty for +£0.5" },
        { name: "Karak Chai", priceR: "2.9", priceL: "3.6", pricePot: "7.9" },
        { name: "Italian Hot Chocolate", priceR: "3.8" },
        { name: "Silk Hot Chocolate", priceR: "3.8" },
      ]
    },
    {
      title: "Iced Drinks",
      headers: ["R", "L"],
      items: [
        { name: "Iced Latte", priceR: "3.9", priceL: "4.4" },
        { name: "Iced Tea", priceR: "3.9", priceL: "4.4", description: "Passion Fruit and Lemon, Raspberry, Peach" },
        { name: "Iced Frappe", priceL: "4.5", description: "Coffee, Cookies and Cream, Mocha" },
        { name: "Iced Americano", priceR: "3.9", priceL: "3.4" },
        { name: "Iced Spanish Latte", priceR: "4.3", priceL: "4.6" },
        { name: "Matcha (Hot or Iced)", priceR: "3.9", priceL: "4.4", description: "Vanilla, White Choc, Blueberry, Strawberry, Dirty (+£1)" },
      ]
    },
    {
      title: "Sodas / Refreshments",
      columns: 2,
      items: [
        { name: "Apple and Raspberry Soda", price: "3.50" },
        { name: "Raspberry and Pomegranate Soda", price: "3.50" },
        { name: "Pink Guava and Lime Soda", price: "3.50" },
        { name: "Mango and Lime Soda", price: "3.50" },
        { name: "Tropical Cooler", price: "4.00" },
        { name: "Pink Lemonade Cooler", price: "4.00" },
        { name: "Dragonfruit and Mango Cooler", price: "4.00" },
        { name: "Lemon and Lime Cooler", price: "4.00" },
      ]
    },
    {
      title: "Red Bull Fusions",
      columns: 2,
      items: [
        { name: "Juneberry", price: "4.40" },
        { name: "Watermelon", price: "4.40" },
        { name: "Iced Vanilla Berry", price: "4.40" },
        { name: "White Peach", price: "4.40" },
        { name: "Tropical", price: "4.40" },
      ]
    },
    {
      title: "Extras",
      items: [
        { name: "Alt Milks", price: "0.6" },
        { name: "Extra Shot", price: "0.5" },
        { name: "Syrups / Cream", price: "0.5" },
      ]
    }
  ],
  evening: [
    {
      title: "Light Bites",
      headers: ["R", "L"],
      items: [
        { name: "Dynamite Prawns", priceR: "6.9", priceL: "8.9" },
        { name: "Dynamite Chicken", priceR: "5.9", priceL: "7.9" },
        { name: "Naga Fried Chicken", priceR: "6.4", priceL: "8.4", description: "Spicy or Creamy" },
        { name: "Sriracha Chicken", priceR: "5.9", priceL: "7.9" },
        { name: "Salt and Pepper Chicken", priceR: "6.4", priceL: "8.4", description: "Add fries for +£2 / Salt & Pepper style or Masala fries for +£3" },
      ]
    },
    {
      title: "Loaded Fries",
      items: [
        { name: "Dynamite Chicken", price: "5.9" },
        { name: "Butter Chicken", price: "6.9" },
        { name: "Salt & Pepper Chicken", price: "6.9" },
        { name: "Naga Fried Chicken", price: "6.9" },
        { name: "Add Masala/Salt & Pepper style fries", price: "1.0" },
      ]
    },
    {
      title: "Buttered Up",
      items: [
        { name: "Butter Chicken Paratha Pizza", price: "7.9" },
        { name: "Butter Chicken Rice Bowl", price: "7.9" },
      ]
    },
    {
      title: "Special",
      items: [
        { 
          name: "Munch Box", 
          price: "13.9", 
          description: "• Choice of fries/masala fries/salt & pepper fries\n• Any two options from light bites\n• Any wrap\n• Can of drink (upgrade to soda/cooler for +£2)" 
        },
      ]
    },
    {
      title: "Wraps",
      items: [
        { name: "Butter Chicken", price: "6.9" },
        { name: "Kofte", price: "7.4" },
        { name: "Dynamite Chicken", price: "6.9" },
        { name: "Sriracha Chicken", price: "6.9" },
        { name: "Naga Fried Chicken", price: "7.4" },
        { name: "Add fries for +£2 / Salt & Pepper style or Masala fries for +£3", price: "" },
      ]
    },
    {
      title: "Sides",
      items: [
        { name: "Fries", price: "2.9" },
        { name: "Sriracha Fries", price: "3.9" },
        { name: "Salt and Pepper Fries", price: "3.9" },
        { name: "Masala Fries", price: "3.9" },
        { name: "Naga Masala Fries", price: "3.9" },
        { name: "Masala Fries with Cheese", price: "4.5" },
        { name: "Jalapeno Cream Cheese Bites", price: "4.0" },
      ]
    },
    {
      title: "Hot Drinks",
      headers: ["R", "L", "POT"],
      items: [
        { name: "Espresso", priceR: "2.9" },
        { name: "Americano", priceR: "3.2", priceL: "3.6" },
        { name: "Latte", priceR: "3.6", priceL: "3.9" },
        { name: "Cappuccino", priceR: "3.6", priceL: "3.9" },
        { name: "Flat White", priceR: "3.7" },
        { name: "Mocha", priceR: "4.0", priceL: "4.4" },
        { name: "White Mocha", priceR: "4.0", priceL: "4.4" },
        { name: "Spanish Latte", priceR: "4.3", priceL: "4.6" },
        { name: "Tea", priceR: "2.5", priceL: "2.8", pricePot: "5.9", description: "Earl Grey, Peppermint, Nettle, Mint" },
        { name: "Spiced Chai Latte", priceR: "4.8", priceL: "5.2", description: "Make it dirty for +£0.5" },
        { name: "Karak Chai", priceR: "2.9", priceL: "3.6", pricePot: "7.9" },
        { name: "Italian Hot Chocolate", priceR: "3.8" },
        { name: "Silk Hot Chocolate", priceR: "3.8" },
      ]
    },
    {
      title: "Iced Drinks",
      headers: ["R", "L"],
      items: [
        { name: "Iced Latte", priceR: "3.9", priceL: "4.4" },
        { name: "Iced Tea", priceR: "3.9", priceL: "4.4", description: "Passion Fruit and Lemon, Raspberry, Peach" },
        { name: "Iced Frappe", priceL: "4.5", description: "Coffee, Cookies and Cream, Mocha" },
        { name: "Iced Americano", priceR: "3.9", priceL: "3.4" },
        { name: "Iced Spanish Latte", priceR: "4.3", priceL: "4.6" },
        { name: "Matcha (Hot or Iced)", priceR: "3.9", priceL: "4.4", description: "Vanilla, White Choc, Blueberry, Strawberry, Dirty (+£1)" },
      ]
    },
    {
      title: "Sodas / Refreshments",
      columns: 2,
      items: [
        { name: "Apple and Raspberry Soda", price: "3.50" },
        { name: "Raspberry and Pomegranate Soda", price: "3.50" },
        { name: "Pink Guava and Lime Soda", price: "3.50" },
        { name: "Mango and Lime Soda", price: "3.50" },
        { name: "Tropical Cooler", price: "4.00" },
        { name: "Pink Lemonade Cooler", price: "4.00" },
        { name: "Dragonfruit and Mango Cooler", price: "4.00" },
        { name: "Lemon and Lime Cooler", price: "4.00" },
      ]
    },
    {
      title: "Red Bull Fusions",
      columns: 2,
      items: [
        { name: "Juneberry", price: "4.40" },
        { name: "Watermelon", price: "4.40" },
        { name: "Iced Vanilla Berry", price: "4.40" },
        { name: "White Peach", price: "4.40" },
        { name: "Tropical", price: "4.40" },
      ]
    },
    {
      title: "Sauces",
      items: [
        { name: "Dynamite, Sriracha, Sriracha Mayo, Naga Mayo, Spicy Naga, Sweet Chilli, Mint Crema, Mayo, Ketchup, Mustard, BBQ", price: "0.5" }
      ]
    },
    {
      title: "Extras",
      items: [
        { name: "Alt Milks", price: "0.6" },
        { name: "Extra Shot", price: "0.5" },
        { name: "Syrups / Cream", price: "0.5" },
      ]
    }
  ]
};
