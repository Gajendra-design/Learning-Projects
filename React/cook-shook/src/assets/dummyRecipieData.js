const dummyRecipes = [
  {
    recipeName: "Artisanal Sourdough Neapolitan",
    chefName: "Chef Gajendra",
    price: "16.50",
    prepTime: "45 mins",
    imageLink: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    ingredients: "Sourdough starter, Tipo 00 flour, San Marzano tomatoes, Fresh mozzarella, Basil leaves, Extra virgin olive oil",
    steps: "1. Hand-stretch the fermented dough carefully. 2. Spread the crushed tomatoes evenly across the base. 3. Top with torn mozzarella and basil. 4. Bake in a stone oven at 450 degrees until charred."
  },
  {
    recipeName: "Zesty Avocado Halloumi Salad",
    chefName: "Elena Rostova",
    price: "12.00",
    prepTime: "15 mins",
    imageLink: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    ingredients: "Ripe avocados, Halloumi cheese, Wild arugula, Cherry tomatoes, Cucumber, Lemon juice, Mint dressing",
    steps: "1. Slice the halloumi and sear on a hot pan until golden brown. 2. Toss the arugula, diced cucumber, and tomatoes in lemon juice. 3. Top with freshly sliced avocado and the warm halloumi."
  },
  {
    recipeName: "Truffle Mushroom Risotto",
    chefName: "Marcus Vance",
    price: "18.99",
    prepTime: "30 mins",
    imageLink: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    ingredients: "Arborio rice, Wild mushrooms, Truffle oil, Parmigiano-Reggiano, Dry white wine, Vegetable broth, Shallots, Garlic cloves",
    steps: "1. Sauté chopped shallots and garlic in olive oil, then toast the Arborio rice for 2 minutes. 2. Gradually add warm vegetable broth one ladle at a time, stirring continuously until absorbed. 3. Stir in the separately sautéed wild mushrooms. 4. Remove from heat, beat in the grated parmesan cheese, and drizzle with premium truffle oil before serving."
  },
  {
    recipeName: "Thai Spicy Basil Noodles",
    chefName: "Jane Doe",
    price: "13.50",
    prepTime: "20 mins",
    imageLink: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80",
    ingredients: "Rice noodles, Holy basil leaves, Thai bird eye chilies, Garlic paste, Dark soy sauce, Oyster sauce, Bell peppers, Scallions",
    steps: "1. Soak the flat rice noodles in warm water for 30 minutes until soft. 2. Pound the fresh chilies and garlic together with a mortar and pestle. 3. Sear the chili-garlic paste in a blazing hot wok, adding sliced bell peppers and the prepared noodles. 4. Toss quickly with dark soy sauce and oyster sauce, then turn off the heat and throw in a generous handful of fresh holy basil leaves."
  },
  {
    recipeName: "Berry Infused Belgian Waffles",
    chefName: "Alex Mercer",
    price: "10.99",
    prepTime: "25 mins",
    imageLink: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=600&q=80",
    ingredients: "All-purpose flour, Pearl sugar, Active dry yeast, Warm whole milk, Melted butter, Egg yolks, Fresh strawberries, Pure maple syrup",
    steps: "1. Dissolve the yeast in warm milk and let it sit until frothy. 2. Mix the flour, egg yolks, and melted butter into the yeast mixture to create a thick batter, then let it rise for 15 minutes. 3. Fold the crunchy pearl sugar gently into the rested dough. 4. Scoop onto a hot waffle iron, bake until deeply golden and crispy, and serve instantly topped with fresh berries and maple syrup."
  },
  {
    recipeName: "Creamy Alfredo Fettuccine",
    chefName: "Rahul Sharma",
    price: "14.25",
    prepTime: "20 mins",
    imageLink: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&q=80",
    ingredients: "Fettuccine pasta, Heavy cream, Parmigiano cheese, Unsalted butter, Fresh garlic, Black pepper, Parsley leaves",
    steps: "1. Boil the fettuccine pasta in salted water until al dente. 2. Melt the unsalted butter in a skillet over medium heat and sauté the minced garlic until fragrant. 3. Whisk in the heavy cream and let it simmer smoothly for 5 minutes. 4. Stir in the freshly grated cheese until melted, toss the pasta into the sauce, and garnish with chopped parsley."
  },
  {
    recipeName: "Smoked Garlic Ribeye Steak",
    chefName: "Chef Ramirez",
    price: "28.99",
    prepTime: "35 mins",
    imageLink: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    ingredients: "Ribeye Steak, Garlic cloves, Fresh rosemary, Sea salt coarse, Black pepper cracked, Salted butter",
    steps: "1. Season the thick-cut ribeye steak generously on all sides with coarse sea salt and cracked black pepper. 2. Heat a heavy cast-iron skillet until smoking hot and sear the steak for 3 minutes on each side. 3. Drop in the salted butter, smashed garlic cloves, and fresh rosemary sprigs into the pan. 4. Spoon the melted garlic butter continuously over the steak for 2 minutes, then let it rest before slicing."
  },
  {
    recipeName: "Artisanal Matcha Macarons",
    chefName: "Yuki Tanaka",
    price: "09.50",
    prepTime: "50 mins",
    imageLink: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80",
    ingredients: "Matcha powder, Fine almond flour, Fresh egg whites, Powdered sugar, Superfine caster sugar, White chocolate chips",
    steps: "1. Sift the fine almond flour, powdered sugar, and green matcha powder together into a clean bowl twice. 2. Whisk the egg whites while slowly adding caster sugar until stiff, glossy peaks form. 3. Fold the dry ingredients gently into the meringue using the macaronage technique until it reaches a lava-like consistency. 4. Pipe onto baking sheets, let them sit for 30 minutes to form a skin, and bake at 150 degrees."
  },
  {
    recipeName: "Mediterranean Grilled Salmon",
    chefName: "Chloe Laurent",
    price: "22.50",
    prepTime: "25 mins",
    imageLink: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    ingredients: "Salmon fillets, Extra virgin olive oil, Lemon slices, Kalamata olives, Capers, Dried oregano, Cherry tomatoes",
    steps: "1. Rub the salmon fillets thoroughly with extra virgin olive oil and dried oregano. 2. Place the fish on a preheated medium-high grill skin-side down and cook undisturbed for 5 minutes. 3. Flip carefully and grill for another 4 minutes until the core turns opaque. 4. Top the grilled fillets immediately with a warm pan-mix of blistered cherry tomatoes, olives, capers, and fresh lemon juice."
  },
  {
    recipeName: "Classic Margherita Pizza",
    chefName: "Priya Verma",
    price: "11.99",
    prepTime: "25 mins",
    imageLink: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
    ingredients: "Leavened pizza dough, San Marzano tomato sauce, Fresh mozzarella balls, Fresh basil leaves, Sea salt, Olive oil drizzle",
    steps: "1. Roll or stretch out your pizza dough on a floured surface to form a circular base. 2. Spread a thin layer of the seasoned tomato sauce evenly across the dough, leaving a border for the crust. 3. Tear the fresh mozzarella balls apart and distribute the pieces across the sauce layer. 4. Bake at maximum oven heat, top with fresh basil leaves immediately upon removal, and finish with a drizzle of olive oil."
  }
];